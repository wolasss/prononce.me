Template.ytHome.events({
	'click .search-button': function() {
		var query = $('.query').val();
		console.log(query);
		Router.go('/pronounce/'+query);
	}
});