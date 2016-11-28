import {
	Meteor
} from 'meteor/meteor';
import {
	_
} from 'meteor/underscore';

var mock_words = [{
	"text": "expérimentalement",
	"normalized": "experimentalement"
}, {
	"text": "amazing",
	"normalized": "amazing"
}, {
	"text": "give",
	"normalized": "give"
}];

Meteor.methods({
	'fixtures/removeWords': function() {
		return YT_APP.Words.remove({});
	},
	'fixtures/loadTestWords': function() {
		_.each(mock_words, function(cap) {
			YT_APP.Words.insert(cap);
		});

		return true;
	}
});