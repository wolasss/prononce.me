Meteor.publish("captions", function(query){
	check(query, String);

	return YT_APP.Captions.find({$text: { $search: query } });
});
