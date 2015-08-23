app.controllers.base = app.view.extend({

	components: {},

	bootstrap: function() {

		this.setupBaseComponents().setupLoginModal();

	},

	setupBaseComponents: function() {

		this.components.mainNav = new app.components.mainNav({$el: $('.mainNav')});
		this.components.mainSearch = new app.components.mainSearch({$el: $('.mainSearch')});

		return this;

	},

	setupLoginModal: function() {

		$('.mainHeader .signIn').on('click' + this.ens, function(e) {

			e.preventDefault();
			this.showLoginModal();

		}.bind(this));

		return this;

	},

	showLoginModal: function() {

		this.require('app.components.loginModal', function(LoginModal) {

			new LoginModal({
				beforeInit: this.components.mainNav.close.bind(this.components.mainNav)
			});

		});

	}

});
