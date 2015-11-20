Template.ytVideo.helpers({
	getStartTime: function() {
		return parseInt(this.start,10); //make a variable OFFSET
	},
	isFirst: function() {
		return Session.get("currentCaption") === 0;
	},
	isLast: function() {
		var captions = Template.parentData(1).captions;

		return Session.get("currentCaption") === captions.fetch().length - 1;
	}
});

Template.ytVideo.events({
	'click .nav-previous': function() {
		var currentCaption = parseInt(Session.get("currentCaption"), 10);
		if(currentCaption>=1) Session.set("currentCaption", currentCaption-1);
	},
	'click .nav-next': function() {
		var currentCaption = parseInt(Session.get("currentCaption"), 10);
		Session.set("currentCaption", currentCaption+1);
	},
	'click .nav-repeat': function() {
		var iframe = $('iframe')[0];

		iframe.contentWindow.postMessage('{"event":"command","func":"seekTo","args":['+parseInt(this.start,10)+', true]}', '*');
		iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
	}
});