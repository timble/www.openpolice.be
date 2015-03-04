module.exports = function(grunt) {

    // measures the time each task takes
    require('time-grunt')(grunt);

    // load time-grunt and all grunt plugins found in the package.json
    require( 'load-grunt-tasks' )( grunt );

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
                        dest: '_includes',
                        flatten: true
                    },
                    {
                        expand: true,
                        src: ['vendor/stack/json/*.*'],
                        dest: '_data/vendor',
                        flatten: true
                    }
                ]
            }
        },

        // Compile sass files
        sass: {
            dest: {
                options: {
                    sourcemap: true,
                    style: 'compressed'
                },
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


        // Shell commands
        shell: {
            jekyllBuild: {
                command: 'bundle exec jekyll build --config _config.yml,_config.local.yml'
            },
            jekyllServe: {
                command: 'bundle exec jekyll serve --config _config.yml,_config.local.yml'
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
                    interrupt: false,
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
                    interrupt: false,
                    atBegin: true
                }
            },
            kss: {
                files: [
                    // Including
                    '_styleguide/*.*',
                    '_styleguide/**/*.*'
                ],
                tasks: ['kss'], // Compile
                options: {
                    interrupt: false,
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
                    atBegin: true,
                    livereload: true
                }
            }
        },

        // Concurrently tasking
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            dev: {
                tasks: ["shell:jekyllServe", "watch"]
            }
        }
    });


    // The dev task will be used during development
    grunt.registerTask('default', ['copy', 'concurrent:dev']);
};
