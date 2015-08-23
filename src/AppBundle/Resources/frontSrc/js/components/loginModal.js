app.components.loginModal = app.view.extend({

	initialize: function(options) {

		options.beforeInit && options.beforeInit();

		$.get('login', function(html) {

			this.$el = $(html);
			this.delegateEvents();

			this.lightbox = $.simpleLightbox.open({
				content: this.$el,
				elementClass: 'slbContentEl'
			});

		}.bind(this));

	},

	events: {
		submit: 'submitLogin'
	},

	submitLogin: function(e) {

		e.preventDefault();

		console.log('post data to server...');

	}

});
