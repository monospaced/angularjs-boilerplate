module.exports = function(grunt) {
  'use strict';

  var app = 'boilerplate';
  var scripts = [
    'node_modules/angular/angular.js',
    'node_modules/angular-ui-router/release/angular-ui-router.js',
    'app.js',
    'views/**/*.js',
    'shared/**/*.js',
    '!shared/assets/scripts/build.js',
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      /*options: {
        sourceMap: true,
      },*/
      dev: {
        src: scripts,
        dest: 'shared/assets/scripts/build.js',
      },
    },
    cssmin: {
      prod: {
        options: {
          keepSpecialComments: 0,
        },
        files: {
          'shared/assets/styles/build.css': [
            'shared/assets/styles/build.css',
          ],
        },
      },
    },
    express: {
      dev: {
        options: {
          script: 'index.js',
        },
      },
    },
    rsync: {
      dev: {
        options: {
          args: ['--exclude-from=.rsyncignore',],
          delete: true,
          dest: '~/webapps/' + app,
          host: 'mnspcd',
          recursive: true,
          src: './',
          ssh: true,
        },
      },
    },
    uglify: {
      prod: {
        options: {
          mangle: false,
          soureMap: true,
        },
        files: {
          'shared/assets/scripts/build.js': scripts,
        },
      },
    },
    watch: {
      scripts: {
        files: scripts,
        tasks: ['concat:dev',],
        options: {
          atBegin: true,
          interrupt: true,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-rsync');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', [
    'uglify:prod',
    'cssmin',
  ]);

  grunt.registerTask('deploy', [
    'uglify:prod',
    'cssmin',
    'rsync',
  ]);

  grunt.registerTask('serve', [
    'express:dev',
    'watch',
  ]);
};
