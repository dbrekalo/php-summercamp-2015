/*--------------------------------------------------------------
Globals and aliases
--------------------------------------------------------------*/
window.app = {
	controllers: {},
	components: {},
	helpers: {},

	repository: $.wk.repo,
	require: $.wk.repo.require,
	view: $.wk.simpleView
};

/*--------------------------------------------------------------
Plugin defaults
--------------------------------------------------------------*/
app.pluginDefauls = {
	fastsearch: {
		resultsContClass: 'fsResults',
		resultsOpenedClass: 'fsrOpened',
		itemClass: 'fsResultItem'
	}
};

/*--------------------------------------------------------------
Repository configuration
--------------------------------------------------------------*/
app.repository.config({
	resources: {
		fastsearch: {
			resources: ['css/components/fastSearch.css', 'vendor/fastsearch/dist/fastsearch.min.js'],
			namespace: '$.fastsearch',
			onResolve: function() {
				$.extend($.fastsearch.defaults, app.pluginDefauls.fastsearch);
			}
		},
		simpleLightbox: {
			resources: ['vendor/simple-lightbox/dist/simpleLightbox.min.css', 'vendor/simple-lightbox/dist/simpleLightbox.min.js'],
			namespace: '$.simpleLightbox'
		},
		'app.components.loginModal': {
			resources: ['css/components/loginModal.css', 'js/components/loginModal.js'],
			dependencies: 'simpleLightbox'
		}
	},
	baseUrl: '/bundles/app/',
	resolveFileByNamespace: function(namespace) {

		var namespaceParts = namespace.split('.');

		if (namespaceParts[0] !== 'app') { return false; }

		if (namespaceParts[1] === 'controllers') {

			return [
				'css/' + namespaceParts.slice(1).join('/') + '.css',
				'js/' + namespaceParts.slice(1).join('/') + '.js'
			];

		} else {

			return 'js/' + namespaceParts.slice(1).join('/') + '.js';

		}

	},
	loadSufix: '?v=' + new Date().getTime()
});
