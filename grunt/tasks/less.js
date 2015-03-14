'use strict';

module.exports = function(grunt, options) {

    grunt.loadNpmTasks('grunt-contrib-less');

    return {
        tasks: {
            less: {
                'app': {
                    options: {
                        yuicompress: true
                    },
                    files: {
                        'build/app/css/style.css': 'build/app/css/style.less'
                    }
                }
            }
        }
    }
};