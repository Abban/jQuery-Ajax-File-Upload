module.exports = function(grunt)
{
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'jquery-fileupload.js',
                dest: 'jquery-fileupload.min.js'
            }
        },
        jshint: {
            files: ['gruntfile.js', 'jquery-fileupload.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        watch: {
            scripts: {
                files: ['jquery-fileupload.js'],
                tasks: ['build']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', 'build');
    grunt.registerTask('build', ['jshint', 'uglify']);
};