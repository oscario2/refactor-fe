FROM alpine

RUN apk add --update nodejs=16.13.1-r0 npm

WORKDIR /app

COPY . .

RUN npm config set package-lock false

RUN npm -g i yarn

RUN yarn install

EXPOSE 6006

CMD ["yarn storybook"]