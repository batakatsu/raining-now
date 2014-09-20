module.exports = function(grunt) {

	grunt.initConfig({
		sass: {
			options: {
				style: 'compressed',
				sourcemap: true,
				noCache: true
			},
			styles: {
				src: 'scss/style.scss',
				dest: 'public/stylesheets/style.css'
			}
		},
		uglify: {
			js: {
				src: "public/js/app.js",
				dest: "public/js/app.min.js"
			}
		},
		concat : {
			js : {
				src : [//対象のJSファイルを記述
				'js/sample01.js',
				'js/sample02.js'
				],
				dest : 'public/js/app.js'
			}
		},
		watch: {
			sass: {
				files: ["scss/*.scss"],
				tasks: ['sass']
			},
			js: {
				files: ["public/js/*.js"],
				tasks: ['concat','uglify']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

};