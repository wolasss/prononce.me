Template.ytDonateModal.events({
	'change .coffeeDismiss': function(event, template) {
		var checkbox = event.currentTarget;

		if($(checkbox).is(':checked')) {
			GAnalytics.event("donation", "hide_donate");
			ReactiveStore.set("ytCoffee", true);
		} else {
			GAnalytics.event("donation", "show_donate");
			ReactiveStore.set("ytCoffee", false);
		}
	},
	'click form [type="image"]': function() {
		GAnalytics.event("donation", "go_paypal_donate");
	}
});
