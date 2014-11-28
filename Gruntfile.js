//Gruntfile
module.exports = function(grunt) {  
  
  // Project configuration.
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'bloqtk.min.js': 'index.js'
        }
      }
    }  
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
}
