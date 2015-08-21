app.controllers.base = app.view.extend({

	components: {},

	bootstrap: function() {

		this.setupBaseComponents();

	},

	setupBaseComponents: function() {

		this.components.mainNav = new app.components.mainNav({$el: $('.mainNav')});
		this.components.mainSearch = new app.components.mainSearch({$el: $('.mainSearch')});

	}

});
