module.exports = function() {

	this.Then(/^the coffee button should be visible$/, function() {
		client.waitForExist(".fa-coffee");
		client.waitForVisible(".fa-coffee");
	});

	this.When(/^I click on the coffee button$/, function() {
		client.click(".fa-coffee");
	});

	this.Then(/^the donation modal should open$/, function() {
		client.elementActive();
		expect(client.isExisting("body.modal-open")).toBe(true);
		client.waitForVisible("#donateModal", 30000);
	});

	this.Then(/^the paypal button should be visible$/, function() {
		client.waitForExist('#donateModal input[type="image"]');
		client.waitForVisible('#donateModal input[type="image"]', 30000);
	});

	this.When(/^I click on paypal button$/, function() {
		client.click("#donateModal form [type='image']");
	});

	this.Then(/^I should be redirected to paypal site$/, function() {
		expect(client.url().value).toMatch(/^https:\/\/www.paypal.com/ig);
	});
};