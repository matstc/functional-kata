module.exports = function(grunt) {

  grunt.initConfig({
    jasmine_node: {
      coverage: {

      },
      options: {
        forceExit: true,
        match: '.',
        matchall: false,
        extensions: 'js',
        specNameMatcher: 'spec',
        junitreport: {
          report: false,
          savePath : "./build/reports/jasmine/",
          useDotNotation: true,
          consolidate: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-node-coverage');

  grunt.registerTask('default', 'jasmine_node');
};
