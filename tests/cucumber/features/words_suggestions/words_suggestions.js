module.exports = function() {
	this.Before(function() {
		server.call("fixtures/removeWords");
		server.call("fixtures/loadTestWords");
	});

	this.Then(/^it should show no results$/, function() {
		client.waitForExist(".search-result span");
		client.waitForVisible(".search-result span");
	});

	this.Then(/^it should show words suggestions$/, function() {
		client.waitForExist(".search-result .examples");
		client.waitForVisible(".search-result .examples");
		client.waitForExist(".search-result .examples a");
		client.waitForVisible(".search-result .examples a");
	});

	this.Then(/^is should show word "([^"]*)" as a suggestion$/, function(word) {
		expect(client.getText(".search-result .examples a")).toBe(word);
	});

	this.When(/^I click a word "([^"]*)"$/, function(word) {
		client.click(".search-result .examples a");
	});
};