app.components.mainNav = app.view.extend({

	events: {
		'click .toggleBtn': function() {
			this.$el.hasClass('opened') ? this.hide() : this.show();
		}
	},

	show: function() {

		this.$el.addClass('opened');

	},

	hide: function() {

		this.$el.removeClass('opened');

	}

});
