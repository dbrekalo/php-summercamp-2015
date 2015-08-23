app.router = {

	start: function() {

		this.$container = $('body');

		this.$container.on('click.router', '.jsLink', function(e) {

			e.preventDefault();
			this.get($(e.currentTarget).attr('href'));

		}.bind(this));

	},

	get: function(url) {

		var self = this;

		$.get(url, function(data) {

			document.title = data.pageTitle;
			window.history.pushState({}, data.pageTitle, url);

			app.require('app.controllers.' + data.pageType, function(PageController) {

				window.scrollTo(0, 0);

				app.currentController.close();

				self.$container.addClass('appModeOn').html(data.html);

				app.currentController = new PageController();

			});

		});

	}

};

app.router.start();
