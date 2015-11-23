Template.ytNoResults.created = function () {
	this.subscribe("similarWords", Router.current().params.q);
};

Template.ytNoResults.helpers({
	similarWords: function() {
		return YT.Words.find({});
	}
});