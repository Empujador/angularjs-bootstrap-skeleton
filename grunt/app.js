'use strict';

module.exports = function(grunt, options) {

    grunt.registerTask('app:deploy',[
        // clean all dirs
        'clean:public',
        'clean:build-app',

        // handle less files
        'concat:app-less',
        'less:app',

        // handle js files
        //'concat:app-tpl',
        'concat:app-js',

        // copy files
        'copy:app-vendor',
        'copy:app-index',
        'copy:app-js',
        'copy:app-style',
        'copy:app-tpl',
        'copy:app-gfx',

        // fixtures
        'concat-json:fixtures',
        'minjson:fixtures'
    ]);

    grunt.registerTask('app:watch',[
        'app:deploy',
        'watch:app'
    ]);

    grunt.registerTask('server:python',[
        'shell:python'
    ]);

    return {}
};