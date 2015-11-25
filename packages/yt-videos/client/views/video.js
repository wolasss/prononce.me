var yt = new YTPlayer("player", { 'autoplay': 1 });

Template.ytVideo.rendered = function() {
	var self = this;

	Tracker.autorun(function () {
		if (yt.ready() && !isNaN(Session.get("currentCaption"))) {
			var caption = self.data.captions.fetch()[Session.get("currentCaption")];
			yt.player.loadVideoById(caption.video, parseInt(caption.start, 10));
		}
	});
};

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
	},
	isPlayerReady: function() {
		return yt.ready();
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
		if(yt.player) {
			yt.player.seekTo(parseInt(this.start,10));
			yt.player.playVideo();
		}
	},
	'click .nav-backward': function() {
		if(yt.player) {
			yt.player.seekTo(yt.player.getCurrentTime()-5);
			yt.player.playVideo();
		}
	}
});

