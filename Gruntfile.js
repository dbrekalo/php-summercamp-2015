/* jshint node: true */

module.exports = function(grunt) {

	grunt.initConfig({

		settings: {
			frontSrcPath: 'src/AppBundle/Resources/frontSrc/',
			frontDistPath: 'src/AppBundle/Resources/public/'
		},

		shell: {
			watchSass: {
				command: 'sass --watch $(git rev-parse --show-toplevel)/<%= settings.frontSrcPath %>/scss:$(git rev-parse --show-toplevel)/<%= settings.frontDistPath %>/css --style compressed --sourcemap=none'
			},
			updateSass: {
				command: 'sass --update --force $(git rev-parse --show-toplevel)/<%= settings.frontSrcPath %>/scss:$(git rev-parse --show-toplevel)/<%= settings.frontDistPath %>/css --style compressed --sourcemap=none'
			}
		},

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			scripts: {
				files: {
					src: ['<%= settings.frontSrcPath %>js/**/*.js', 'Gruntfile.js']
				}
			}
		},

		jscs: {
			options: {
				config: '.jscsrc'
			},
			scripts: {
				files: {
					src: ['<%= settings.frontSrcPath %>js/**/*.js', 'Gruntfile.js']
				}
			}
		},

		uglify: {
			front: {
				files: [{
					expand: true,
					cwd: '<%= settings.frontSrcPath %>js',
					src: ['**/*.js'],
					dest: '<%= settings.frontDistPath %>js',
					ext: '.js'
				}]
			}
		},

		// Image min
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd:  '<%= settings.frontSrcPath %>images',
					src: ['**/*.{png,jpg,gif}'],
					dest: '<%= settings.frontDistPath %>images'
				}]
			}
		},

		// Watch files
		watch: {
			frontJs: {
				expand: true,
				files: ['<%= settings.frontSrcPath %>js/**/*.js', 'Gruntfile.js'],
				tasks: ['jshint', 'jscs', 'uglify', 'concat'],
				options: {
					spawn: false
				}
			},
			frontImages: {
				files: ['<%= settings.frontSrcPath %>images/**/*.{png,jpg,gif}'],
				tasks: ['imagemin'],
				options: {
					spawn: false
				}
			}
		},

		concat: {
			global: {
				src: [
					'<%= settings.frontDistPath %>vendor/jquery/dist/jquery.min.js',
					'<%= settings.frontDistPath %>vendor/simpleloader/dist/simpleloader.min.js',
					'<%= settings.frontDistPath %>vendor/repository/dist/repository.min.js',
					'<%= settings.frontDistPath %>vendor/whenInViewport/dist/whenInViewport.min.js',
					'<%= settings.frontDistPath %>vendor/lateImages/dist/lateImages.min.js',
					'<%= settings.frontDistPath %>vendor/simple-view/dist/simpleView.min.js',
					'<%= settings.frontDistPath %>js/config.js'
				],
				dest: '<%= settings.frontDistPath %>js/builds/global.js'
			},
			homepage: {
				src: [
					'<%= settings.frontDistPath %>js/builds/global.js',
					'<%= settings.frontDistPath %>js/controllers/homepage.js',
					'<%= settings.frontDistPath %>js/controllers/initializers/homepage.js'
				],
				dest: '<%= settings.frontDistPath %>js/builds/homepage.js'
			}
		},

		concurrent: {
			options: {
				logConcurrentOutput: true
			},
			front: ['shell:watchSass', 'watch']
		}

	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', ['concurrent']);
	grunt.registerTask('build', ['shell:updateSass', 'jshint', 'jscs', 'uglify', 'concat', 'imagemin']);

};
