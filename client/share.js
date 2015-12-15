Template.ytShareLinks.events({
	'click .share-facebook': function(){
		FB.ui({
			method: 'share',
			href: "http://prononce.me"+window.location.pathname,
		}, function(response){});
	}
});