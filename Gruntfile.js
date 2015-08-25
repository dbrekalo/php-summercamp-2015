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

		sass: {
			front: {
				files: [{
					expand: true,
					cwd:'<%= settings.frontSrcPath %>/scss',
					src: ['**/*.scss'],
					dest: '<%= settings.frontDistPath %>/css',
					ext: '.css'
				}],
				options: {
					style: 'compressed',
					sourcemap: 'none',
					update: grunt.option('compileAll') ? false : true
				}
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
				tasks: ['uglify', 'concat', 'jshint', 'jscs'],
				options: {
					spawn: false
				}
			},
			cssFiles: {
				files: ['<%= settings.frontSrcPath %>/scss/**/*.scss'],
				tasks: ['sass'],
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

					'<%= settings.frontDistPath %>js/config.js',

					'<%= settings.frontDistPath %>js/components/mainNav.js',
					'<%= settings.frontDistPath %>js/components/mainSearch.js',

					'<%= settings.frontDistPath %>js/controllers/base.js',
					'<%= settings.frontDistPath %>js/router.js'
				],
				dest: '<%= settings.frontDistPath %>js/builds/global.js'
			},
			homepage: {
				src: [
					'<%= settings.frontDistPath %>js/builds/global.js',
					'<%= settings.frontDistPath %>js/components/lightboxGallery.js',
					'<%= settings.frontDistPath %>js/controllers/homepage.js',
					'<%= settings.frontDistPath %>js/controllers/initializers/homepage.js'
				],
				dest: '<%= settings.frontDistPath %>js/builds/homepage.js'
			},
			detail: {
				src: [
					'<%= settings.frontDistPath %>js/builds/global.js',
					'<%= settings.frontDistPath %>js/controllers/detail.js',
					'<%= settings.frontDistPath %>js/controllers/initializers/detail.js'
				],
				dest: '<%= settings.frontDistPath %>js/builds/detail.js'
			},
			playground: {
				src: [
					'<%= settings.frontDistPath %>vendor/jquery/dist/jquery.min.js',
					'<%= settings.frontDistPath %>vendor/simpleloader/dist/simpleloader.min.js',
					'<%= settings.frontDistPath %>vendor/repository/dist/repository.min.js',
					'<%= settings.frontDistPath %>vendor/whenInViewport/dist/whenInViewport.min.js',
					'<%= settings.frontDistPath %>vendor/lateImages/dist/lateImages.min.js',
					'<%= settings.frontDistPath %>vendor/simple-view/dist/simpleView.min.js',
					'<%= settings.frontDistPath %>vendor/fastsearch/dist/fastsearch.min.js',
					'<%= settings.frontDistPath %>vendor/simple-lightbox/dist/simpleLightbox.min.js',

					'<%= settings.frontDistPath %>js/config.js',
					'<%= settings.frontDistPath %>js/playground.js'
				],
				dest: '<%= settings.frontDistPath %>js/builds/playground.js'
			}
		},

		concurrent: {
			options: {
				logConcurrentOutput: true
			},
			front: ['watch']
		}

	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', ['concurrent']);
	grunt.registerTask('build', ['uglify', 'concat', 'jshint', 'jscs', 'imagemin', 'sass']);

};
