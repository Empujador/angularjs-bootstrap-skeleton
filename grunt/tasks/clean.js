'use strict';

module.exports = function(grunt, options) {

    grunt.loadNpmTasks('grunt-contrib-clean');

    return {
        tasks: {
            clean: {
                'dist': [
                    'dist/**/*'
                ],
                'build-app': [
                    'build/app/**/*'
                ]
            }
        }
    }
};
