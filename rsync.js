var rsync = require('rsyncwrapper');

var host = 'mnspcd';
var dest = '~/webapps/app';

rsync({
  delete: true,
  dest: dest,
  exclude: [
    '.htaccess',
    '.well-known',
  ],
  host: host,
  recursive: true,
  src: './build/',
  ssh: true,
}, function (error, stdout, stderr, cmd) {
  if (error) {
    console.log(error.message);
  } else {
    console.log(stdout, stderr, cmd);
  }
});
