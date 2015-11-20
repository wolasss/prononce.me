Meteor.publish("captions", function(query){
	check(query, String);

	return YT.Captions.find({$text: { $search: query } });
});