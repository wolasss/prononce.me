YT_APP.Settings = {};

YT_APP.Settings.Google = {};
YT_APP.Settings.Google.captcha_key = "6Lf7NhMTAAAAABMAiXxIro9vcukc4Dn7xNnQxsZ5";

Meteor.startup(function() {
  SEO.config({
  		title: 'Comment ça se prononce en français ?',
        meta: {
            'description': 'Utilisez YouTube pour améliorer votre l\'accent français. De vraies personnes, des situations réelles, facile et amusant à utiliser. C\'est chic!'
        },
        url: "http://prononce.me",
  		og: {
  			'title': "Comment ça se prononce en français ?",
  			'description': "Utilisez YouTube pour améliorer votre l'accent français. De vraies personnes, des situations réelles, facile et amusant à utiliser. C'est chic!",
  			'type': "website",
  			'url': "http://prononce.me",
  			'locale': "fr",
            'image': 'http://adamwolski.com/og-image-prononce-me.jpg' 
        },
      	auto: {
      		twitter: true,
      		og: true,
      		set: ['description', 'url', 'title', 'image', 'locale', 'website']
    	}
  });
});