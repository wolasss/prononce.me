YT_APP.Words = new Mongo.Collection("words");

var accents = [ {ch: "à", sub: "a"},
				{ch: "â", sub: "a"},
				{ch: "æ", sub: "ae"},
				{ch: "ç", sub: "c"},
				{ch: "é", sub: "e"},
				{ch: "è", sub: "e"},
				{ch: "ê", sub: "e"},
				{ch: "ë", sub: "e"},
				{ch: "ï", sub: "i"},
				{ch: "î", sub: "i"},
				{ch: "ô", sub: "o"},
				{ch: "œ", sub: "oe"},
				{ch: "ù", sub: "u"},
				{ch: "û", sub: "u"},
				{ch: "ü", sub: "u"},
				{ch: "ÿ", sub: "y"}]; //should should be external and language specific


YT_APP.NormalizeAccents = function(str) {
	_.each(accents, function(a){
		str = str.replace(new RegExp(a.ch, "ig"), a.sub);
	});

	return str;
};