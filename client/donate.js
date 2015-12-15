Template.ytDonateModal.events({
	'change .coffeeDismiss': function(event, template) {
		template.$('#donateModal').modal('hide');
	},
	'click form [type="image"]': function() {
		GAnalytics.event("donation", "go_paypal_donate");
	}
});
