'use strict';

module.exports = function (grunt) {

    // Time how long tasks take. Can help when optimizing build times
    // https://www.npmjs.org/package/time-grunt
    require('time-grunt')(grunt);

    // load grunt configs and passing vars
    // http://creynders.github.io/load-grunt-configs/
    var configs = require('load-grunt-configs')(grunt, {
        config : {
            src: 'grunt/**/*.js'
        },
        clientDevDir: 'app/'
    });

    configs.pkg = grunt.file.readJSON('package.json');

    require('load-grunt-tasks')(grunt);

    grunt.initConfig(configs);
};