module.exports = function(grunt) {

    // measures the time each task takes
    require('time-grunt')(grunt);

    // load time-grunt and all grunt plugins found in the package.json
    require( 'load-grunt-tasks' )( grunt );

    // grunt config
    grunt.initConfig({


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
                    'js/scripts.js': ['_scripts/libraries/jquery-1.10.2.min.js', '_scripts/libraries/jquery.magnific-popup.min.js', '_scripts/libraries/jquery.githubRepoWidget.min.js', '_scripts/apollo.min.js', '_scripts/*.js']
                }
            }
        },


        // Shell commands
        shell: {
            jekyllBuild: {
                command: 'bundle exec jekyll build'
            },
            jekyllServe: {
                command: 'bundle exec jekyll serve'
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
            jekyll: {
                files: [
                    // Including
                    '_about/*.*',
                    '_data/*.*',
                    '_documentation/*.*',
                    '_drafts/*.*',
                    '_guides/*.*',
                    '_includes/*.*',
                    '_layouts/*.*',
                    'blog/*.*',
                    'blog/**/*.*',
                    'css/*.*',
                    'demo/*.*',
                    'images/*.*',
                    'img/*.*',
                    'js/*.*',
                    'work/*.*',
                    '404.html',
                    'sites.html',
                    'index.html'
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
    grunt.registerTask('default', ['concurrent:dev']);

};