Template.ytFooter.helpers({
	isActiveLang: function(lang) {
		return TAPi18n.getLanguage() === lang;
	},
	hideCoffee : function() {
		return ReactiveStore.get("ytCoffee");
	}
});

Template.ytFooter.events({
	'click .lang-picker a': function(e) {
		var lang  = $(e.currentTarget).attr('data-lang');
		TAPi18n.setLanguage(lang);
	}
});