module.exports = function() {
	this.Before(function(){
		server.call("fixtures/removeCaptions");
		server.call("fixtures/loadTestCaptions");
	})

	this.Given(/^I have visited home page$/, function () {
		client.url(process.env.ROOT_URL);
	});

	this.Then(/^the search bar should be visible$/, function () {
		client.waitForExist(".query");
		client.waitForVisible(".query");
	});

	this.When(/^I provide a word "([^"]*)"$/, function (word) {
		client.setValue(".query", word);
	});

	this.When(/^click search button$/, function () {
		client.waitForExist(".search-button");
		client.waitForVisible(".search-button");
		client.click(".search-button");
	});

	this.Then(/^I should be redirected to a result page$/, function () {
		expect(client.url().value).toMatch(/pronounce\/[^\/]+$/ig);
	});

	this.Then(/^the video should be available$/, function () {
		client.waitForExist(".video-player");
		client.waitForVisible(".video-player");
		client.waitForExist("#player");
		client.waitForVisible("#player");
	});

	this.Then(/^the word "([^"]*)" should be highlighted$/, function (word) {
		expect(client.getText(".video-caption strong")).toEqual(word);
	});

	this.When(/^I click "([^"]*)" arrow$/, function (arrow) {
		client.waitForVisible(".nav-"+arrow);
		client.click(".nav-"+arrow);
	});

	this.Then(/^the "([^"]*)" arrow should be visible$/, function (arrow) {
		client.waitForVisible(".nav-"+arrow);
	});

	this.Then(/^the "([^"]*)" arrow should not be visible$/, function (arrow) {
		expect(client.isExisting(".nav-"+arrow)).toBe(false);
	});


}