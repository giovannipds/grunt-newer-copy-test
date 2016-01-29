'use strict';

module.exports = function (grunt) {

  // Automatically load required grunt tasks
  require('jit-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Copies files
    copy: {
      htmls: {
        options: {
          timestamp: true
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: '*.html',
          dest: 'dist/'
        }]
      },
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      htmls: {
        files: ['src/*.html'],
        tasks: ['newer:copy:htmls']
      }
    }

  });

  grunt.registerTask('default', [
    'newer:copy:htmls',
    'watch'
  ]);

};
