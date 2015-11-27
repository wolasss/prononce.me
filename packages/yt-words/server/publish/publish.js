Meteor.publish("similarWords", function(query){
	check(query, String);

	query = YT_APP.NormalizeAccents(query);

	var candidates = YT_APP.Words.find({normalized: new RegExp("(^"+query+"$|"+query.slice(0, 3)+"|"+query.slice(-3)+")")}, {fields: {"normalized": 1}, limit: 500});
	var candidates_arr = candidates.fetch();

	if(candidates_arr.length) {
		_.each(candidates_arr, function(c){
			c.index = YT_APP.WordsComparison.compare(c.normalized, query);
		});
	}

	candidates_arr.sort(function(a,b){
		return b.index - a.index;
	});

	var result_arr = candidates_arr.slice(0,5);
	var result_arr_ids = _.pluck(result_arr, "_id");

	return YT_APP.Words.find({_id: {$in: result_arr_ids}});
});