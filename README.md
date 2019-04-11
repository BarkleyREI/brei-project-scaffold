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

## Webpack

`npm install`

## Commands

`npm run check` - run linting tests

### Building

`npm run build` - Run a plain build

## Tasks


### assemble

`npm run clean:assemble && npm run assemble:build && npm run assemble:execute`

- Cleans assemble directories.
- Builds assemble files.
- Executes sass reference script (updateScss.js).

### assemble:build

`assemble default modules --file _config/assemblefile.js`

- Runs the assemble tasks "default" and "modules", using a provided config file.

### assemble:execute

`node lib/updateScss.js`

- Runs the node script that builds empty sass files for modules, partials, and templates based on what handlebar files exist.

### build

`npm run clean:dist && npm run scaffold && npm run build:css && npm run build:img && npm run build:js && npm run copy`

- Cleans up the dist folder.
- Runs the assemble tasks and modernizr tasks. (scaffold) 
- Runs the CSS build tasks. (build:css)
- Runs the IMG build tasks. (build:img)
- Runs the JavaScript build tasks. (build:js)
- Copies all the compiled HTML into the dist folder.

### build:css

`npm run sass:lint && npm run sass:build && npm run postcss:preprocess && npm run sass:dist && npm run postcss:postprocess`

- Runs Sass linting task. (sass:lint)
- Runs Sass build task. (sass:build)
- Runs PostCSS build task. (postcss:build)

### build:img

`imagemin app/img/* --out-dir=dist/img`

- Runs imagemin on app/img and outputs into dist/img.

### build:js

`npx webpack --config ./_config/webpack.config.js --mode=production`

- Runs webpack configuration on ejs directory, with a production flag.

### check

`eslint -c _config/.eslintrc.json app/ejs && npm run sass:lint`

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

### postcss:postprocess

`postcss --config _config/ -r dist/css/main.css --env=css`

- Runs postcss script using congfiguration (_config/postcss.config.js) on css file in dist directory. This is using the scss configuration. 
- PostCSS plugins: 

### postcss:preprocess

`postcss --config _config/ -r app/css/main.css --env=css`

- Runs postcss script using congfiguration (_config/postcss.config.js) on css file in dist directory. This is using the scss configuration. 
- PostCSS plugins: 

### preprocess

`npm run preprocess:css && npm run preprocess:js && npm run modernizr`

### preprocess:css

`npm run sass:build && npm run postcss:preprocess`

### preprocess:js

`npx webpack --config ./_config/webpack.config.js`

### sass:build

`node lib/nodesass.js`

### sass:dist

`node lib/copy.js --css`

### sass:lint

`npm run postcss:fixsass && stylelint \"app/scss/**/*.scss\" --fix --cache --cache-location \"./.stylelintcache/\" --config \"./_config/.stylelintrc.json\" --ignore-path \"./_config/.stylelintignore\"`

### scaffold

`npm run assemble && npm run modernizr`

### start

`npm run scaffold && node lib/browsersync.js`

### test

`mocha`

- Runs tests on the project files.