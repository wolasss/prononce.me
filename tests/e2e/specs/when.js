import { When } from 'cucumber';

const timeout = 10000;

When(/^I click on the coffee button$/, function() {
    const el = browser.$('.fa-coffee');

    el.waitForExist({timeout});
    el.waitForDisplayed({timeout});
    el.click();
});

When(/^I click on paypal button$/, function() {
    const el = browser.$('#donateModal form [type=image]');

    el.waitForExist({timeout});
    el.waitForDisplayed({timeout});
    el.click();
});

When(/^I click on "([^"]*)"$/, function(selector) {
    const el = browser.$(selector);

    el.waitForExist({timeout});
    el.waitForDisplayed({timeout});
    el.click();
});

When(/^I choose "([^"]*)" option from "([^"]*)" field$/, function(val, val2) {
    const el = browser.$("[value='" + val + "']");

    el.waitForExist("[value='" + val + "']");
    el.click();
});

When(/^I click submit button$/, function() {
    const el = browser.$("button[type='submit']");

    el.waitForExist({timeout});
    el.waitForDisplayed({timeout});
    el.waitForClickable({timeout});

    browser.execute("$('button[type=submit]').click()");
});

When(/^user click button "([^"]*)"$/, function(button) {
    const el = browser.$(".nav-" + button);
    const video = browser.$(".video-player iframe");

    browser.pause(2000);
    el.waitForExist();
    el.waitForDisplayed();
    video.waitForExist();
    video.waitForDisplayed();

    el.click();

    browser.execute(`$(".nav-${button}").click()`);
});


When(/^I provide a word "([^"]*)"$/, function(word) {
    const el = browser.$(".query");

	el.setValue(word);
});

When(/^click search button$/, function() {
    const el = browser.$(".search-button");

	el.waitForExist({timeout});
	el.waitForDisplayed({timeout});
    el.waitForClickable({timeout});

    el.click();
});

When(/^I click "([^"]*)" arrow$/, function(arrow) {
    const el = browser.$(".nav-" + arrow);

    el.waitForExist();
    el.waitForDisplayed();
    el.waitForClickable();

    el.click();
});
