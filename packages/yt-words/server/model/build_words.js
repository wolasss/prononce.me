YT_APP.buildWordsCollection = function() {

	YT_APP.Captions.find({}).forEach(function (doc){
		if(doc.text) {
			var words = doc.text.replace(/[\n\r\s]/gi, " ").split(" ");
			words.forEach(function(word){
				var normalized = YT_APP.NormalizeAccents(word.replace(/[\.\,\?<\>\/\\\s\!\-\=\[\]\'\"\:\(\)\d]/gi, ""));

				if(normalized) {
					if(!YT_APP.Words.findOne({normalized: normalized})) {
						YT_APP.Words.insert({text: word.replace(/[\.\,\?\<\>\!]/gi, ""), normalized: normalized});
					}
				}


			});
		}
	});

};
