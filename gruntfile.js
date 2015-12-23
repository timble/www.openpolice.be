module.exports = function(grunt) {

    // measures the time each task takes
    require('time-grunt')(grunt);

    // load time-grunt and all grunt plugins found in the package.json
    require( 'load-grunt-tasks' )( grunt );

    // Customise the browser used by BrowserSync, example: `grunt --canary`
    var browser = 'default';
    if(grunt.option('canary')){ browser = 'Google Chrome Canary'; };

    // grunt config
    grunt.initConfig({

        // Copy bower files
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: ['vendor/stack/logos/*.*'],
                        dest: 'images/stack/vendor',
                        flatten: true
                    },
                    {
                        expand: true,
                        src: ['vendor/stack/scss/*.*'],
                        dest: '_scss/_utilities',
                        flatten: true
                    },
                    {
                        expand: true,
                        src: ['vendor/stack/template/*.*'],
                        dest: '_includes/vendor',
                        flatten: true
                    },
                    {
                        expand: true,
                        src: ['vendor/stack/json/*.*'],
                        dest: '_data/vendor',
                        flatten: true
                    },
                    {
                        expand: true,
                        src: ['vendor/jekyll-pagination/template/pagination.html'],
                        dest: '_includes/vendor',
                        flatten: true
                    }
                ]
            }
        },

        // Compile sass files
        sass: {
            options: {
                outputStyle: 'compressed',
                sourceMap: true
            },
            main: {
                files: [{
                    'css/style.css': '_scss/style.scss',
                    'css/ie8.css': '_scss/ie8.scss',
                    'css/print.css': '_scss/print.scss'
                }]
            }
        },


        // Uglify
        uglify: {
            options: {
                soureMap: true
            },
            build: {
                files: {
                    'js/scripts.js': ['vendor/jquery/dist/jquery.min.js', 'vendor/magnific-popup/dist/jquery.magnific-popup.min.js', 'vendor/apollo/dist/apollo.min.js', '_scripts/*.js']
                }
            }
        },


        // Browser Sync
        browserSync: {
            dev: {
                bsFiles: {
                    src : ["_site/*.*", '_site/css/*.css',]
                },
                options: {
                    port: 6776, // OPPO (OP)en(PO)lice on phone keypad
                    open: true, // Opens site in your default browser, no need to remember the port
                    notify: false,
                    watchTask: true,
                    injectChanges: false,
                    browser: browser,
                    server: {
                        baseDir: '_site'
                    }
                }
            }
        },


        // Shell commands
        shell: {
            jekyllBuild: {
                command: 'bundle exec jekyll build --config _config.yml,_config.local.yml'
            },
            bower: {
                command: 'bower update && bower install' // Run update before install to avoid version collisions
            }
        },


        // KSS styleguide
        kss: {
            options: {
              includeType: 'less',
              includePath: '_styleguide/stylesheets/default.less',
              template: '_styleguide/template'
            },
            dist: {
                files: {
                  'styleguide': ['_styleguide']
                }
            }
        },


        // Watch files
        watch: {
            css: {
                files: [
                    // Including
                    '_scss/*.scss', '_scss/**/*.scss'
                ],
                tasks: ['sass'], // Compile
                options: {
                    interrupt: true,
                    atBegin: true
                }
            },
            uglify: {
                files: [
                    // Including
                    '_scripts/*.js'
                ],
                tasks: ['uglify'], // Compile
                options: {
                    interrupt: true,
                    atBegin: true
                }
            },
            jekyll: {
                files: [
                    // Including
                    '_about/*.*',
                    '_data/*.*',
                    '_documentation/*.*',
                    '_drafts/*.*',
                    '_features/*.*',
                    '_guides/*.*',
                    '_includes/*.*',
                    '_layouts/*.*',
                    'blog/*.*',
                    'blog/**/*.*',
                    'css/*.*',
                    'demo/*.*',
                    'features/*.*',
                    'images/*.*',
                    'images/**/*.*',
                    'img/*.*',
                    'js/*.*',
                    'stack/*.*',
                    'styleguide/*.*',
                    'styleguide/**/*.*',
                    '404.html',
                    'sites.html',
                    'index.html',
                    'blog.xml',
                    'blog.json'
                ],
                tasks: ['shell:jekyllBuild'],
                options: {
                    interrupt: true,
                    atBegin: true
                }
            }
        }
    });


    // The dev task will be used during development
    grunt.registerTask('default', ['copy', 'browserSync', 'watch']);
};
