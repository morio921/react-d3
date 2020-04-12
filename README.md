react-d3
====================

### Setup

This project now follows the same development workflow as the one explained in [topheman/webpack-babel-starter](https://github.com/topheman/webpack-babel-starter) (the v2 using **webpack 2**).

#### Install

```shell
git clone https://github.com/topheman/d3-react-experiments.git
cd d3-react-experiments
yarn
```

#### Run

##### From localhost

`npm start`

##### From your network ip

Useful to access the website via wifi from other devices such as smartphones.

`LOCALHOST=false npm start`

#### Build

At the root of the project :

* `npm run build`: for debug (like in dev - with sourceMaps and all)
* `npm run build-prod`: for production (minified/optimized ...)
* `npm run build-prod-all`: both at once in the same build (with sourcemaps on dev version)

A `/build/dist` folder will be created with your project built in it.

You can run it with `npm run serve-build`

#### Linter

I'm using eslint, based on [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), a preset for `.eslintrc` configuration. For more infos, checkout the release it was implemented: [react-es6-redux@2.5.0](https://github.com/topheman/react-es6-redux/releases/tag/v2.5.0).

* `npm run lint`: single run linting of `/src` & `/test` folders
* `npm run lint-watch`: same in watch mode

You can disable the linter by `LINTER=false npm start` (though it will still be run a pre-commit hook)

#### Tests

This project is unit tested using the [Jest](https://facebook.github.io/jest/) framework:

* To run those tests: `npm test`
* To run those tests in watch mode: `npm run jest-watch`
* To update snapshots: `npm run jest -- -u`

Those unit tests are run each time you commit and will be run on [travis-ci](https://travis-ci.org/topheman/d3-react-experiments) when you'll push.

