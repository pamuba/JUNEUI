var sass = require('node-sass')
module.exports = function(grunt){

    //Configuration
    grunt.initConfig({
        //provide options to plugins
        //path of the src files
        concat:{
            js:{
                src:['src/js/*.js'],
                dest:'build/scripts.js'
            },
            css:{
                src:'src/css/*css',
                dest:'build/Styles.css'
            }
        },
        uglify:{
            build:{
                files:[{
                    src:'build/scripts.js',
                    dest:'build/scripts.min.js'
                }]
            }
        },
        sass:{
            options:{
                implementation:sass,
                sourceMaps:true,
            },
            build:{
                files:[{
                    src:'src/css/styles.scss',
                    dest:'src/css/styles.css'
                }]
            }
        },
        cssmin:{
            target:{
                files:[{
                    expand:true,
                    cwd:'build',
                    src:['*.css', '!*.min.css'],
                    dest:'build',
                    ext:'.min.css'
                }]
            }
        }

    })

    //Load the plugins
    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-sass')


    //Register tasks
    // grunt.registerTask('js', function(){
    //     console.log("js task running")
    // })

    // grunt.registerTask('styles', function(){
    //     console.log("js task running")
    // })

    // grunt.registerTask('all', ['js', 'styles']);

    grunt.registerTask('concat-js', ['concat:js']);
    grunt.registerTask('concat-css', ['concat:css']);
    grunt.registerTask('uglify-js', ['uglify:build']);
    // grunt.registerTask('cssmin', ['cssmin:target']);
}