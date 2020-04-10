//YT_APP.Words._ensureIndex( { normalized: "text" }, { default_language: "none" } );

var similarity = function(vec1, vec2) {
	var similarity = 0;

	if(vec1.length !== vec2.length) {
		return -1;
	}

	var dot = 0;

	for(var i=0, len = vec1.length; i<len; i++) {
		dot += vec1[i] * vec2[i];
	}

	var vec1_length = 0;

	for(i=0, len = vec1.length; i<len; i++) {
		vec1_length += vec1[i]*vec1[i];
	}

	vec1_length = Math.sqrt(vec1_length);
	var vec2_length = 0;

	for(i=0, len = vec2.length; i<len; i++) {
		vec2_length += vec2[i]*vec2[i];
	}

	vec2_length = Math.sqrt(vec2_length);

	if(vec1_length === 0 || vec2_length === 0) {
		return 0;
	}

	similarity = dot / (vec1_length * vec2_length);

	return similarity.toFixed(4);
};

YT_APP.WordsComparison = {
	buildVectors: function(s1, s2) {
		var joined = s1+s2;
		var union = _.unique(joined).sort();
		var s1_vec = [], s2_vec = [];

		for(var i=0, len = union.length; i<len; i++) {
			var pick = function(e){return e == union[i];};
			s1_vec.push(_.filter(s1, pick).length);
			s2_vec.push(_.filter(s2, pick).length);
		}

		return [s1_vec, s2_vec];
	},

	compare: function(s1, s2) {
		var vectors = this.buildVectors(s1, s2);
		return similarity(vectors[0], vectors[1]);
	}

};
