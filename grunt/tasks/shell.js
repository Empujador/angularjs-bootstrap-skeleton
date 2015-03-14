'use strict';

module.exports = function(grunt, options) {

    grunt.loadNpmTasks('grunt-shell');

    return {
        tasks: {
            shell: {
                python: {
                    options: {
                        stdout: true
                    },
                    command: 'python -m SimpleHTTPServer 8001'
                }
            }
        }
    }
};