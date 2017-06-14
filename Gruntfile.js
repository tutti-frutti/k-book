"use strict";

module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-browser-sync");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.initConfig({
        browserSync: {
            server: {
                bsFiles: {
                    src: ["*.html", "css/*.css", "js/*.js"]
                },
                options: {
                    server: ".",
                    watchTask: true,
                    notify: false,
                    open: true,
                    ui: false
                }
            }
        },

        watch: {
            bake: {
                files: ["app/*.html"],
                tasks: ["bake:build"]
            },
                    html: {
                        files: ["*.html"],
//                        tasks: ["copy:html"]
                    },

            style: {
                files: ["sass/**/*.{scss,sass}"],
                tasks: ["sass", "postcss", "csso"],
                options: {
                    spawn: false
                }
            }
        },
    });

    grunt.registerTask("serve", [
    "browserSync",
    "watch",
  ]);
    grunt.registerTask("build", [
    "clean",
    "copy",
    "postcss",
  ]);
};