function searchQuery() {
	var query = $('.query').val();
	if(query) {
		Router.go('/prononciation/'+query);
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
		$input[0].selectionStart = $input[0].selectionEnd = caretPos + 1;
		$input.focus();
	}
});

Template.ytSearch.helpers({
	getCurrentQuery: function() {
		return Session.get("currentQuery");
	},
	char: function() {
		return ["à", "â", "æ", "ç", "é", "è", "ê", "ë", "ï", "î", "ô", "œ", "ù", "û", "ü", "ÿ"]; //should should be external and language specific
	}
});