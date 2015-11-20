Template.ytVideo.helpers({
	getStartTime: function() {
		return parseInt(this.start,10) - 2; //make a variable OFFSET
	}
});