Meteor.publish("captions", function(query){
	check(query, String);

	query = "\""+query+"\"";

	return YT_APP.Captions.find({$text: { $search: query, $language: "none" } });
});
