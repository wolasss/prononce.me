Template.ytShareLinks.events({
	'click .share-facebook': function(){
		FB.ui({
			method: 'share',
			href: window.location.href,
		}, function(response){});
	}
});