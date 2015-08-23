app.controllers.homepage = app.controllers.base.extend({

	initialize: function() {

		this.bootstrap();

		this.require('app.components.lightboxGallery', function(LightboxGallery) {

			this.components.sidebarGallery = new LightboxGallery({$el: $('.galleryModuleType1')});

		});

	}

});
