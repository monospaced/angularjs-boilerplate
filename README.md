
[DEPRECATED] Mnspd AngularJS Boilerplate
===========================

**Since [AngularJS support has been discontinued](https://blog.angular.io/discontinued-long-term-support-for-angularjs-cc066b82e65a) this package is deprecated and no longer maintained.**

---

Minimal starter project for AngularJS 1.6, with UI-Router 1.0, Ng-Redux, ES2015, PostCSS and Webpack.

Follows [AngularJS styleguide (ES2015)](https://github.com/toddmotto/angular-styleguide).

Not intended to be an active dependency - just download, unzip, install node_modules, and start building your own project.

Dependencies
------------

git | node 5.12 | npm

yarn `brew install yarn`

Install
-------

[Download](https://github.com/monospaced/angularjs-boilerplate/archive/master.zip) and unzip to a folder of your choice.

Edit `name`, `version` and `licence` properties in `package.json` as required, then:

````
$ cd your-project-folder
$ yarn
$ git init
$ git add .
$ git commit -am 'Initial commit'
````

Run
---

````
$ npm start

http://localhost:8080
````

Build
-----

````
$ npm run build

./build
````

Publish
-------

Simple deployment with `rsync`.

Configure `host` and `destination` variables in `rsync.js`, then:

````
$ npm run deploy
````
