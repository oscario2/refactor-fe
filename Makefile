include .env

# package
PKG := $(shell basename $(CURDIR))

# runtime
NODE := $(which node)

##
# define
##
define _NODE_MAJOR_VERSION
$(shell node -p "process.version.substr(1,2)")
endef

# call value by key from package.json
define _PACKAGE_KEY
$(shell node -p "require('./package.json')['$(1)']")
endef

# pipe stdout and stderr to folder from .gitignore
define _DEBUG
$(shell $(1) > stdout/stdout.txt 2>stdout/stderr.txt)
endef

# run command
define _RUN
@if [ ${call _NODE_MAJOR_VERSION} -gt 16 ]; then\
	echo "$(eval _OPTS=NODE_OPTIONS=--openssl-legacy-provider)";\
fi
${_OPTS} && $(1)
endef

# test
define _TEST
$(call _RUN, yarn jest --config jest.config.js --verbose --testPathPattern=$(1))
endef

## 
# storybook
##
storybook:
	$(call _RUN, node scripts/storybook.script.js)

##
# tests
##
test-components:
	$(call _TEST,src/components)
	
##
# hooks
##
prepare:
	$(call _RUN, yarn husky install)

## 
# docker
##
DTAG := $(call _PACKAGE_KEY,version)
DIMG := "${PKG}:${DTAG}"

docker-build:
	@docker build -t ${DIMG} .

docker-build-clean:
	docker build --no-cache -t ${DIMG} .

docker-run:
	@docker run -it --memory="512M" --network host --init ${DIMG}

docker-remove:
	@docker rmi -f ${DIMG}

# cat /sys/fs/cgroup/memory/memory.limit_in_bytes
docker-shell:
	@docker run -it --memory="512M" --memory-swap="2g" ${DIMG} sh

docker-delete-all:
	@docker system prune -a --volumes

# disallow running if in docker environment
docker:
	@echo ${DIMG}
	@$(MAKE) docker-build docker-console