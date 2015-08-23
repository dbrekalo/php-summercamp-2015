app.components.mainNav = app.view.extend({

	events: {
		'click .toggleBtn': function() {
			this.$el.hasClass('opened') ? this.close() : this.open();
		}
	},

	open: function() {

		this.$el.addClass('opened');

	},

	close: function() {

		this.$el.removeClass('opened');

	}

});
