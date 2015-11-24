Session.setDefault("currentCaption", 0);

Template.ytVideoList.helpers({
	getCurrentCaption: function() {
		return Session.get("currentCaption") + 1;
	},
	getCaptionsLength: function(){
		return this.captions.fetch().length;
	}
});

Template.registerHelper("currentCaption", function() {
	return this.captions.fetch()[Session.get("currentCaption")];
});