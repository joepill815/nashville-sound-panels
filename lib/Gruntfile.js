module.exports = function(grunt) {

  grunt.initConfig({
    pug: {
      compile: {
        options: {
          pretty:  true,
          data: {
            debug: false
          }
        },
        files: {
          '../index.html': ['../assets/pug/index.pug']
        }
      }
    },
    watch: {
      files: ['../assets/pug/index.pug'],
      tasks: ['pug']
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['pug', 'watch']);
};