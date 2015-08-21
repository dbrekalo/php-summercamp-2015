app.components.lightboxGallery = app.view.extend({

	events: {
		'click .zoomImage': 'zoomImage'
	},

	zoomImage: function(e) {

		e.preventDefault();

		this.$items = this.$items || this.$('.zoomImage');

		this.require('simpleLightbox', function() {

			this.lightbox = this.lightbox || new $.simpleLightbox({
				$items: this.$items,
				bindToItems: false
			});

			this.lightbox.showPosition(this.$items.index($(e.target)));

		});

	}

});
