YT_APP.buildWordsCollection = function() {

	YT_APP.Captions.find({}).forEach(function (doc){
		if(doc.text) {
			var words = doc.text.split(" ");
			_.each(words, function(word){
				word = word.replace(/[\.\,\?<\>\/\\\s\!\-\=\[\]\d]/gi, "");
				var normalized = YT_APP.NormalizeAccents(word);

				if(normalized) {					
					if(!YT_APP.Words.findOne({normalized: normalized})) {
						YT_APP.Words.insert({text: word, normalized: normalized});
					}
				}
				

			});
		}
	});

};