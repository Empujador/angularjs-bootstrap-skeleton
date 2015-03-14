'use strict';

module.exports = function(grunt, options) {

    grunt.loadNpmTasks('grunt-contrib-watch');

    return {
        tasks: {
            watch: {
                'app': {
                    files: [
                        'app/**/*'
                    ],
                    tasks: [
                        'app:deploy'
                    ]
                }
            }
        }
    }
};
