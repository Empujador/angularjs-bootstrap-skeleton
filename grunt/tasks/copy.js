'use strict';

module.exports = function(grunt, options) {

    grunt.loadNpmTasks('grunt-contrib-copy');

    return {
        tasks: {
            copy: {
                'app-index': {
                    files: [
                        {
                            src: 'app/index.html',
                            dest: 'dist/index.html'
                        }
                    ]
                },
                'app-gfx': {
                    files: [
                        {
                            expand: true,
                            cwd: 'app/gfx/',
                            src: ['**'],
                                dest: 'dist/gfx/'
                        }
                    ]
                },
                'app-js': {
                    files: [
                        {
                            src: 'build/app/js/app.js',
                            dest: 'dist/js/app.js'
                        }
                    ]
                },
                'app-style': {
                    files: [
                        {
                            src: 'build/app/css/style.css',
                            dest: 'dist/css/style.css'
                        }
                    ]
                },
                'app-tpl': {
                    files: [
                        {
                            expand: true,
                            cwd: 'app/tpl/',
                            src: ['**'],
                            dest: 'dist/tpl/'
                        }
                    ]
                },
                'app-vendor':  {
                    files: [
                        {
                            src: 'app/vendor/angular/1.3.14/angular.js',
                            dest: 'dist/js/angular.js'
                        },
                        {
                            src: 'app/vendor/angular/1.3.14/angular-route.js',
                            dest: 'dist/js/angular-route.js'
                        },
                        {
                            src: 'app/vendor/angular/1.3.14/angular-sanitize.js',
                            dest: 'dist/js/angular-sanitize.js'
                        },
                        {
                            src: 'app/vendor/bootstrap/3.3.2/js/bootstrap.js',
                            dest: 'dist/js/bootstrap.js'
                        },
                        {
                            src: 'app/vendor/bootstrap/3.3.2/css/bootstrap.css',
                            dest: 'dist/css/bootstrap.css'
                        },
                        {
                            src: 'app/vendor/bootstrap/3.3.2/css/bootstrap.css.map',
                            dest: 'dist/css/bootstrap.css.map'
                        },
                        {
                            src: 'app/vendor/bootstrap/0.12.1/ui-bootstrap-custom.js',
                            dest: 'dist/js/ui-bootstrap-custom.js'
                        },
                        {
                            src: 'app/vendor/fontawesome/4.3.0/css/font-awesome.css',
                            dest: 'dist/css/font-awesome.css'
                        },
                        {
                            expand: true,
                            flatten: true,
                            cwd: 'app/vendor/bootstrap/3.3.2/fonts/',
                            src: ['**'],
                            dest: 'dist/fonts/'
                        },
                        {
                            expand: true,
                            flatten: true,
                            cwd: 'app/vendor/fontawesome/4.3.0/fonts/',
                            src: ['**'],
                            dest: 'dist/fonts/'
                        },
                        {
                            src: 'app/vendor/jquery/1.11.2/jquery.js',
                            dest: 'dist/js/jquery.js'
                        }
                    ]
                }
            }
        }
    }
};