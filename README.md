
## Intro

A boilerplate with fine grained control to bundle libraries or apps in `cjs` or `esm`

## Project

- [`src/`]()
    - [`components/`]()
        - `*.example.tsx` example to be used in the kitchen sink
        - `*.stories.tsx` stories using [storybook](https://github.com/storybookjs/storybook)
        - `*.styles.tsx` styling using [styled-components](https://github.com/styled-components/styled-components)
        - `*.test.tsx` testing using [jest](https://github.com/facebook/jest)
        - `*.types.ts` types relevant to this component
    - [`styles/`]()
        - contains the shared `styles` across the project
    - [`types/`]()
        - contains the shared `types` across the project
    - [`app.tsx`]()
        - showcase each `*.example.tsx` from `components`
- [`tests/`](#jfj)
    - `bundle.cjs.test.jsx` tests the `cjs` bundle
    - `bundle.esm.test.jsx` tests the `esm` bundle
- [`scripts/`]()  
    - `run.script.js` ensures invariant execution across all platforms and versions
    - `storybook.script.js` runs an invaraint instance of `start-storybook`
- [`.vscode/`]()
    - `launch.json` provides debugging with breakpoints in `src/components/*.test.tsx` 
    - `settings.json` provides auto formatting using [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and hides irrelevant folders



## Workflow
The CI pipeline will run the following in chronological order
- `yarn test`, 
    - to run every test from `src/components/*.test.tsx`
- `yarn build`, 
    - to bundle for `cjs` and `esm` together with `.d.ts` types
- `yarn test:bundle`
    - to run every test from `tests/cjs.test.tsx`


## Docker
This project provides a set of helper scripts for a seamless docker integration
- `yarn docker:script --build`
    - builds an image in the format of `name:version` from `package.json`
- `yarn docker:script --run`
    - runs built image and allows appending any docker flags like `--memory="512M"`
- `yarn docker:script --shell`
    - shells into built image


## Contributing
- Install depedencies using `yarn` to automatically make us of features such as [deduping](https://classic.yarnpkg.com/en/docs/cli/dedupe)
- Any new component _must_ be `exported` in `src/index.ts` to be included in the library
- The `workflow` will run on pull-requests and _must_ pass before any contribution will be reviewed
- Emphasize on generalization, encapsulation and invariance, see sample [component]()



