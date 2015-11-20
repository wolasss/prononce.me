function searchQuery() {
	var query = $('.query').val();
	if(query) {
		Session.set("currentQuery", query);
		Router.go('/pronounce/'+query);
	}
}

Template.ytSearch.events({
	'click .search-button': function() {
		searchQuery();
	},
	'keydown .query': function(e) {
		if(e.which === 13) {
			searchQuery();
		}
	}
});

Template.ytSearch.helpers({
	getCurrentQuery: function() {
		return Session.get("currentQuery");
	}
});