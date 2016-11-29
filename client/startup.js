Meteor.startup(function() {
	reCAPTCHA.config({
		theme: 'light',
		sitekey: YT_APP.Settings.Google.captcha_key
	});
	SEO.config({
		title: TAPi18n.__("seo.global.title"),
		meta: {
			'description': TAPi18n.__("seo.global.desc")
		}
	});
});