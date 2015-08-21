app.components.mainNav = app.view.extend({

	intialize: function() {

		this.opened = this.$el.hasClass('opened');

	},

	events: {
		'click .toggleBtn': 'toggle'
	},

	toggle: function() {

		this.opened ? this.close() : this.open();

	},

	open: function() {

		this.$el.addClass('opened');
		this.opened = true;

	},

	close: function() {

		this.$el.removeClass('opened');
		this.opened = false;

	}

});
