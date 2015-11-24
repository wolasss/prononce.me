Template.ytNoResults.created = function () {
	this.subscribe("similarWords", YT_APP.NormalizeAccents(Router.current().params.q));
};

Template.ytNoResults.helpers({
	similarWords: function() {
		return YT_APP.Words.find({});
	}
});