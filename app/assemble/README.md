# Assemble.io project structure.

## Fixtures

Data sources for modules and templates

## Helpers

Filled by BarkleyREI/brei-assemble-helpers when generator is run

## Includes

JavaScript, CSS, Meta Tags, and SVG/Font includes.

You will need to copy `symbol-defs.svg` from your icomoon project into `_svg.hbs`.

`_fonts.hbs` should have any typekit/google font include statements in it. 

## Layouts

Default and Index layouts for templates.

### Index

You will need to add references to all your JavaScript build files in the index.hbs layout. The reasoning for this is
 so that all the references are in one place, instead of relying on the build mechanism to detect all the unique 
 build file variations and correctly compile the scripts together.
 
If you notice a file is not being built into dist/, check this place first.

## Modules

Modular large scale components. Sometimes built from one or more partials.

Examples:
- Masthead
- Home Page Feature Sections
- Global Header
- Global Footer

## Partials

Modular small scale components that can stand on their own or make up larger modules.

Examples:
- Logo
- Button
- Social Media links
