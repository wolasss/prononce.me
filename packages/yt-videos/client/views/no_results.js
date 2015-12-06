Template.ytNoResults.created = function () {
	var words = this.subscribe("similarWords", YT_APP.NormalizeAccents(Router.current().params.q));

	this.autorun(function(){
		if(words.ready()) {
			Meteor.isReadyForSpiderable = true;
		}
	})
};

Template.ytNoResults.helpers({
	similarWords: function() {
		return YT_APP.Words.find({});
	}
});