app.components.lightboxGallery = app.view.extend({

	events: {
		'click .zoomImage': 'zoomImage'
	},

	zoomImage: function(e) {

		e.preventDefault();

		this.require('simpleLightbox', function() {

			this.$items = this.$items || this.$('.zoomImage');

			this.lightbox = this.lightbox || new $.simpleLightbox({
				$items: this.$items,
				bindToItems: false
			});

			this.lightbox.showPosition(this.$items.index($(e.currentTarget)));

		});

	}

});
