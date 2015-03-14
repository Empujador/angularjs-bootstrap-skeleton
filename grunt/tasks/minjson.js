'use strict';

module.exports = function (grunt, options) {

    grunt.loadNpmTasks('grunt-concat-json');
    grunt.loadNpmTasks('grunt-minjson');

    return {
        tasks: {
            'concat-json': {
                fixtures: {
                    src: ['app/fixtures/*.json'],
                    dest: 'build/fixtures.json'
                }
            },
            minjson: {
                fixtures: {
                    files: {
                        'dist/fixtures.json': 'build/fixtures.json'
                    }
                }
            }
        }
    }
};