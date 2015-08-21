app.components.mainSearch = app.view.extend({

	initialize: function() {

		this.$input = this.$('.query').one('focus', this.setupSearch.bind(this));

	},

	setupSearch: function() {

		return this.require('fastsearch', function() {

			this.fastSearch = this.fastSearch || this.$input.fastsearch({

			}).data('fastsearch');

		});

	}

});
