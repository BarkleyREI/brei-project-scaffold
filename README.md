# <%= appname %>

CMS:

JIRA Project:

Epic Ticket:

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

### Assemble

`npm run clean:assemble && npm run assemble:build && npm run assemble:execute`

- Cleans assemble directories.
- Builds assemble files.
- Executes sass reference script (updateScss.js).

#### Assemble:build

`assemble default modules --file _config/assemblefile.js`

- Runs the assemble tasks "default" and "modules", using a provided config file.

#### Assemble:execute

`node lib/updateScss.js`

- Runs the node script that builds empty sass files for modules, partials, and templates based on what handlebar files exist.

### Build

`npm run clean:dist && npm run scaffold && npm run build:css && npm run build:img && npm run build:js && npm run copy`

- Cleans up the dist folder.
- Runs the assemble tasks and modernizr tasks. (Scaffold) 
- Runs the CSS build tasks. (Build:css)
- Runs the IMG build tasks. (Build:img)
- Runs the JavaScript build tasks. (Build:js)
- Copies all the compiled HTML into the dist folder.

#### Build:css

`npm run sass:lint && npm run sass:build && npm run postcss:build`

- Runs Sass linting task. (Sass:lint)
- Runs Sass build task. (Sass:build)
- Runs PostCSS build task. (Postcss:build)

#### Build:img

`imagemin app/img/* --out-dir=dist/img`

- Runs imagemin on app/img and outputs into dist/img.

#### Build:js

`npx webpack --config ./_config/webpack.config.js --mode=production`

- Runs webpack configuration on ejs directory, with a production flag.

### Check

`eslint -c _config/.eslintrc.json app/ejs && npm run sass:lint`

- Runs eslint on the ejs directory.
- Runs Sass linting tasks. (Sass:lint)

### Clean

#### Clean:assemble

`rm -rf app/*.html && rm -rf app/modules/*.html`

- Removes all .html files under app/ and under app/modules/

#### Clean:dist

`rm -rf dist/`

- Remove all contents of the dist folder.

#### Clean:web

`rm -rf ../web`

- Remove all contents of the web folder.

### Copy

`npm run copy:html`

- Runs HTML copy task. (Copy:html)

#### Copy:html

`cp -r app/*.html dist`

- Copies all html files under app/ to dist.

### Deploy

`npm run clean:web && cp -r dist/ ../web`

- Runs web clean task. (Clean:web)
- Copies everything inside dist folder to web folder.

### Modernizr

`customizr -c ./_config/modernizr-config.json   `

- Runs customizr script to produce a custom build of modernizr.js, which it places in `app/js/plugins/`

### PostCSS

#### PostCSS:build

`postcss --config _config/ -r dist/css/main.css --env=scss`

- Runs postcss script using congfiguration (_config/postcss.config.js) on css file in dist directory. This is using the scss configuration. 
- PostCSS plugins: 