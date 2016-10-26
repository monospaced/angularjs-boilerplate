'use strict';

var express = require('express');
var http = require('http');
var stylus = require('stylus');
var nib = require('nib');
var app = express();

function compile(str, path) {
  return stylus(str)
  .set('filename', path)
  .set('sourcemap', {
    inline: true,
  })
  .use(nib());
}

app.use(stylus.middleware({
    src: __dirname,
    compile: compile,
  })
);

app.use('/', express.static(__dirname + '/'));

app.get('*', function(req, res) {
  res.sendFile('/index.html', {
    root: __dirname,
  });
});

http.createServer(app).listen(8000);

console.log('Express server listening on port 8000');
