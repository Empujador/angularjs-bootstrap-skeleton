'use strict';

module.exports = function (grunt, options) {

    grunt.loadNpmTasks('grunt-contrib-concat');

    var createTemplateCache = function (lines, filepath) {
        var tpl = lines
            .replace(/(\r\n|\n|\r|\t)/gm, '')// clear system signs
            .replace(/\s{2,100}(<)/gm, '<')// clear whitespaces before html tag
            .replace(/\s{2,100}/gm, ' ')// clear whitespaces on line
            .replace(/(\\'|')/gm, "\\'");// uncomment single quotes,';

        if (typeof options.appDevDir == 'string' && options.appDevDir != '') {
            filepath = filepath.replace(options.appDevDir, '');
        }

        return "angular.module('" + filepath + "', []).run([\n" +
            "'$templateCache', function($templateCache) {\n" +
            "$templateCache.put('" + filepath + "'," +
            "\n'" + tpl + "'" +
            ");\n" +
            "}]);";

    };

    return {
        tasks: {
            concat: {
                'options': {
                    separator: '\n'
                },
                'app-js': {
                    options: {
                        banner: "'use strict';\n",
                        process: function (src) {
                            return src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
                        }
                    },
                    src: [
                        'app/js/base/app.js',
                        'app/js/core/*.js',
                        'app/js/services/*.js',
                        //'build/app/js/template.js',
                        'app/js/controller/*.js',
                        'app/js/comps/**/*.js'
                    ],
                    dest: 'build/app/js/app.js'
                },
                'app-less': {
                    src: [
                        'app/less/base/*.less',
                        'app/less/style.less',
                        'app/less/**/*.less'

                    ],
                    dest: 'build/app/css/style.less'
                },
                'app-tpl': {
                    options: {
                        process: createTemplateCache
                    },
                    src: [
                        'app/tpl/**/*.html'
                    ],
                    dest: 'build/app/js/template.js'
                }
            }
        }
    }
};