Session.setDefault("currentCaption", 0);

Template.ytVideoList.helpers({
	getCurrentCaption: function() {
		return Session.get("currentCaption") + 1;
	},
	getCaptionsLength: function(){
		return this.captions.fetch().length;
	},
	currentCaption: function() {
		return this.captions.fetch()[Session.get("currentCaption")];
	}
});