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
	},
	'click .char-picker': function(e) {
		var c = $(e.currentTarget).text();
		var $input = $('.query');
		var caretPos = $input[0].selectionStart;
		var currentVal = $input.val();

		$input.val( currentVal.substring(0, caretPos) + c + currentVal.substring(caretPos) );
	}
});

Template.ytSearch.helpers({
	getCurrentQuery: function() {
		return Session.get("currentQuery");
	},
	char: function() {
		return ["ù", "û", "ü", "ÿ", "à", "â", "æ", "ç", "é", "è", "ê", "ë", "ï", "î", "ô", "œ"]; //should should be external and language specific
	}
});