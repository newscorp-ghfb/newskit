# Scripts

A list of project script commands included in the package.json.

## Naming Convention

Scripts should be named using the following naming convention:
[action]:[context]

## Dev

* `dev` -> runs in parallel the main Typescript project, storybook, and documentation sites in watch mode.

* `dev:docs` -> runs in parallel the main Typescript project and documentation sites in watch mode.

## Linting

* `lint:code` -> runs linter (eslint) for all the files across the src, site, e2e e.t.c.

* `lint:code:fix` -> runs the linter as above but with --fix (autofix) flag.

* `lint:code:base` -> runs eslint without specifying file or folders, used by lint:code and githooks, you probably don't need to use this.

* `lint:markdown` -> runs linter for all the .md files in the packages.

* `lint` -> runs all lint:<> scripts.

## Testing

* `test` -> runs lint and test:unit:dev scripts, ignores ci-only tests.

* `test:unit:run` -> used by other commands to call jest with correct base arguments. Use to generate snapshots for ci-only tests.

* `test:unit:ci` -> runs all the unit tests with CircleCI optimised config.

* `test:unit:comps` -> runs the unit tests on the src folder.

* `test:unit:site` -> runs the unit tests on the site folder.

* `test:visual:comps:ci` -> starts the local storybook and runs the applitools storybook tests afterwards.

* `e2e:build` -> builds the end to end tests.

* `e2e:serve` -> runs the end to end tests on port 8080.

* `e2e:comps` -> opens the cypress test runner in interactive mode and loads the tests found on cypress/components folder (e2e:serve needs to be running prior to this).

* `e2e:comps:ci` -> starts e2e:serve and runs the cypress components tests headlessly.

* `e2e:docs` -> opens the cypress test runner and loads the tests found on cypress/site folder.

* `e2e:docs:ci` -> starts serve:docs and runs the cypress docs tests headlessly.

* `eyes:storybook` -> runs the applitools storybook tests locally. Requires APPLITOOLS_API_KEY to be exported prior to running.

## Storybook

* `dev:storybook` -> locally starts storybook at port 6006.

## Build and deploy

* `build:clean` -> removes any existing build.

* `build:copy-files` -> copies over README to components dist folder.

* `build:package-json` -> builds a package json for component library dist, adding module definitions.

* `build:ts` -> builds the Typescript components using es2015 module format, into dist/.

* `build:ts:cjs` -> builds the Typescript components using commonJs module format, into dist/common/.

* `build:storybook` -> builds storybook.

* `build:docs` -> builds documentation site, into public/.

* `postbuild:docs` -> move 404.html to public/.

* `build:icons` -> generates only the icons that are used within newskit.

* `build:comps` -> builds the components folder ready to be published to NPM.

* `build:sync-version-number` -> copies the current version number from package json into the src folder.

* `build` -> runs the above builds, creating a ready to publish dist folder, as well as storybook and docs.

* `serve:docs` -> starts a simple http server to serve the documentation site in public/.

* `serve:storybook` -> serves the storybook as static files.

## Utils

* `preinstall` -> stops npm being used for install, please use yarn instead.

* `dependencies:check` -> runs the package-change-checker module, this runs `yarn install` if dependencies or dev dependencies have changed between `HEAD@{1}` and `HEAD`. Used via husky post-checkout and post-merge hooks.
