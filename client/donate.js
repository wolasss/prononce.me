Template.ytDonateModal.events({
	'change .coffeeDismiss': function(event, template) {
		var checkbox = event.currentTarget;

		if($(checkbox).is(':checked')) {
			ReactiveStore.set("ytCoffee", true);
		} else {
			ReactiveStore.set("ytCoffee", false);
		}
	}
});