# react_starter

React base app with Webpack and Mocha/Chai testing

## Installation

NOTE: installation requires io.js version of Node due to jsdom requirements
(if you want to use tests)

 * clone the repository and change there
 * npm install
 * npm start
 * go to http://localhost:8080/

## For production

 * npm build > full app as a optimized bundle
 * npm run library > only one components as CommonJS library (or other Webpack supported build) 

## Documentation

There's sample index.html in the doc/ folder for ES5 based use case with global vars and no modules.

For full app use the bundle.js that build command produces.

For use as a library, run the library build and use any JS module system (ES6, node, systemjs).

This version only produces a library from one component (kuppi.csjx).
You can change this using entry setting in the Webpack config under
library target.

## Run tests

```
node_modules/mocha/bin/mocha  test/*.jsx --require babel/register
```

Or just mocha depending on your $PATH settings.
