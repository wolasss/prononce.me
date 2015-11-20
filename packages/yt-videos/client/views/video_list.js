var currentCaption = new ReactiveVar(0);

Template.ytVideoList.helpers({
	getCurrentCaption: function() {
		return currentCaption.get() + 1;
	},
	getCaptionsLength: function(){
		return this.captions.fetch().length;
	},
	currentCaption: function() {
		return this.captions.fetch()[currentCaption.get()];
	}
});