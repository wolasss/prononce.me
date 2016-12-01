Tracker.autorun(function() {
	var lang = TAPi18n.getLanguage();

	SEO.set({
		title: TAPi18n.__("seo.global.title"),
		meta: {
			'description': TAPi18n.__("seo.global.desc")
		},
		url: "https://prononce.me"
	});
});