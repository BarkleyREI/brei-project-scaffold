# <%= appname %>

CMS:

JIRA Project:

Epic Ticket:

Stash Repo: <%= stashrepo %>

##Project Info:

### Static Repo Versions

**Project Scaffold**: <%= scaffoldversion %>
 
**SASS Boilerplate**: <%= sassversion %>

**SASS Mixins**: <%= mixinversion %>

**Assemble Structure**: <%= assembleversion %>

**Assemble Helpers**: <%= helperversion %>

## NPM Scripts

`npm install`

## Commands

`npm run check` - run linting tests

`npm start` - run server

### Building

`npm run build` - Run a plain build

### Deployment

`npm run deploy` - Clone `dist/` into appropriate deployment directories

## Tasks

### assemble

`npm run clean:assemble && npm run assemble:build && npm run assemble:execute`

- Cleans assemble directories.
- Builds assemble files.
- Executes sass reference script (updateScss.js).

### assemble:server

`npm run clean:assemble && npm run assemble:server-build && npm run assemble:execute`

- Cleans assemble directories.
- Builds assemble files (with server flag).
- Executes sass reference script (updateScss.js).

### assemble:server-build

`assemble default organisms --file _config/assemblefile.js --option=server:true`

- Runs the assemble tasks "default" and "organisms", using a provided config file. Adds a flag for a server build to allow specific actions.

### assemble:build

`assemble default organisms --file _config/assemblefile.js`

- Runs the assemble tasks "default" and "organisms", using a provided config file.

### assemble:execute

`node lib/updateScss.js`

- Runs the node script that builds empty sass files for modules, partials, and templates based on what handlebar files exist.

### build

`npm run clean:dist && npm run scaffold && npm run check && npm run build:img && npm run build:css && npm run build:js && npm run copy`

- Cleans up the dist folder.
- Runs the assemble server tasks and preprocessor tasks. (scaffold) 
- Runs lint checks for SASS and ES6 (check)
- Runs the IMG build tasks. (build:img)
- Runs the CSS build tasks. (build:css)
- Runs the JavaScript build tasks. (build:js)
- Copies all the compiled HTML into the dist folder.

### build:css

`npm run sass:build && npm run postcss:preprocess && npm run sass:dist && npm run postcss:postprocess`

- Runs Sass build task. (sass:build)
- Runs PostCSS preprocess task. (postcss:preprocess)
- Runs Sass dist task. (sass:dist)
- Runs PostCSS postprocess task. (postcss:postprocess)

### build:img

`node lib/imagemin.js`

- Runs imagemin script on app/img and outputs into dist/img.

### build:js

`npx webpack --config ./_config/webpack.config.js --mode=production`

- Runs webpack configuration on ejs directory, with a production flag.

### check

`eslint --ignore-path _config/.eslintignore -c _config/.eslintrc.json app/ejs && npm run sass:lint`

- Runs eslint on the ejs directory.
- Runs Sass linting tasks. (sass:lint)

### clean:assemble

`node lib/del.js --assemble`

- Removes all .html files under app/ and under app/modules/

### clean:deploy

`node lib/del.js --deploy`

- Remove all contents of the deployment folder(s) based on the del config.

### clean:dist

`node lib/del.js --dist`

- Remove all contents of the dist folder based on the del config.

### copy

`node lib/copy.js --dist`

- Copies all files under app/ to dist based on the copy config.

### deploy

`npm run clean:deploy && node lib/copy.js --deploy`

- Runs deploy clean task. (clean:deploy)
- Copies all files under app/ to deploy folder(s) based on the copy config.

### modernizr

`customizr -c ./_config/modernizr-config.json`

- Runs customizr script to produce a custom build of modernizr.js, which it places in `app/js/plugins/`

### postcss:fixsass

`postcss --config _config/ -r app/scss/**/*.scss --env=scss`

- Runs postcss script using congfiguration (_config/postcss.config.js) on css file in dist directory. This is using the scss configuration. 
- PostCSS plugins: 
    - [postcss-sorting](https://github.com/hudochenkov/postcss-sorting) - Sorts rules in SCSS.

### postcss:postprocess

`postcss --config _config/ -r dist/css/main.css --env=csspost`

- Runs postcss script using congfiguration (_config/postcss.config.js) on css file in dist directory. This is using the csspost configuration. 
- PostCSS plugins: 
    - [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) - Converts px values to rem values.
    - [cssnano](https://github.com/cssnano/cssnano) - Minifies CSS.

### postcss:preprocess

`postcss --config _config/ -r app/css/main.css --env=csspre`

- Runs postcss script using congfiguration (_config/postcss.config.js) on css file in app directory. This is using the csspre configuration. 
- PostCSS plugins: 
    - [autoprefixer](https://github.com/postcss/autoprefixer) - Adds vendor prefixes based on browser requirements.
    
### preprocess

`npm run preprocess:css && npm run preprocess:js && npm run modernizr`

- Runs CSS Preprocessing task.
- Runs JS Preprocessing task.
- Runs modernizr task.

### preprocess:css

`npm run sass:build && npm run postcss:preprocess`

- Runs Sass Build task.
- Runs Postcss Preprocess task.

### preprocess:js

`npx webpack --config ./_config/webpack.config.js`

- Compiles ES6 JavaScript using Webpack configuration.

### sass:build

`node lib/nodesass.js`

- Compiles SCSS using nodesass configuration.

### sass:dist

`node lib/copy.js --css`

- Copies CSS from app to dist.

### sass:lint

`npm run postcss:fixsass && stylelint "app/scss/**/*.scss" --fix --cache --cache-location "./.stylelintcache/" --config "./_config/.stylelintrc.json" --ignore-path "./_config/.stylelintignore"`

- Runs Postcss Fixsass task.
- Lints the SCSS files based on defined stylelint rules.

### scaffold

`npm run assemble && npm run preprocess`

- Runs Assemble tasks
- Runs preprocess task

### scaffold:server

`npm run assemble:server && npm run preprocess`

- Runs Assemble server tasks
- Runs preprocess task

### start

`npm run scaffold && node lib/browsersync.js`

- Runs scaffold task
- Starts a server on port 3000 (or first available port) and opens in a new tab using default browser.

### test

`mocha`

- Runs tests on the project files.
