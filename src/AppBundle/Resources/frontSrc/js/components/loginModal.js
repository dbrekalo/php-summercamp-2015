app.components.loginModal = app.view.extend({

	initialize: function(options) {

		options.beforeInit && options.beforeInit();

		$.get('login', function(html) {

			this.$el = $(html);

			this.lightbox = $.simpleLightbox.open({
				content: this.$el,
				elementClass: 'slbContentEl'
			});

		}.bind(this));

	},

	beforeClose: function() {

		this.lightbox && this.lightbox.destroy();

	}

});
