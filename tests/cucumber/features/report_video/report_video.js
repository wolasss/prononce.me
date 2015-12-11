module.exports = function() {

	this.Given(/^I have visited page with "([^"]*)" word$/, function (word) {
		client.url(process.env.ROOT_URL+"prononciation/"+word);
	});

	this.Then(/^captcha should be visible$/, function () {
		client.waitForExist("#recaptcha-container iframe");
	});

	this.When(/^I click submit button$/, function () {
		client.waitForExist("button[type='submit']");
		client.waitForVisible("button[type='submit']");
		client.click("button[type='submit']");
	});

	this.Then(/^I should see error by "([^"]*)" field$/, function (field) {
		client.waitForExist(".has-error [data-schema-key='"+field+"']");
		client.waitForVisible(".has-error [data-schema-key='"+field+"']");
	});

	this.When(/^I choose "([^"]*)" option from "([^"]*)" field$/, function (val) {
		client.waitForExist("[value='"+val+"']");
		client.click("[value='"+val+"']");
	});

	this.Then(/^I should see captcha error$/, function () {
		client.waitForExist(".alert-danger");
		client.waitForVisible(".alert-danger");
	});

	this.Then(/^I should not see error by "([^"]*)" field$/, function (field) {
		expect(client.isExisting(".has-error [data-schema-key='"+field+"']")).toBe(false);
	});
}