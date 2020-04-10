import { Then } from 'cucumber';
import chai from 'chai';

const expect = chai.expect;
const timeout = 15000;
let previousTime;

Then(/^I should see "([^"]*)"$/, function(selector) {
    const el = browser.$(selector);

    el.waitForExist({timeout});
    el.waitForDisplayed({timeout});
});

Then(/^I should be logged in$/, function() {
    const el = browser.$('.sidebar-menu');

    el.waitForExist({timeout});
    el.waitForDisplayed({timeout}); //TODO - better selector
});

Then(/^the coffee button should be visible$/, function() {
    const el = browser.$('.fa-coffee');

    el.waitForExist({timeout})
    el.waitForDisplayed({timeout})
});

Then(/^the donation modal should open$/, function() {
    const el = browser.$("body.modal-open");
    const modal = browser.$("#donateModal");

    modal.waitForExist({timeout});
    modal.waitForDisplayed({timeout});
});

Then(/^the paypal button should be visible$/, function() {
    const el = browser.$('#donateModal input[type="image"]');

    el.waitForExist({timeout})
    el.waitForDisplayed({timeout})
});

Then(/^I should be redirected to paypal site$/, function() {
    expect(browser.getUrl()).to.match(/^https:\/\/www.paypal.com/ig);
});


Then(/^captcha should be visible$/, function() {
    const el = browser.$('#recaptcha-container iframe');

    el.waitForExist({timeout});
    el.waitForDisplayed({timeout});
});


Then(/^I should see error by "([^"]*)" field$/, function(field) {
    const el = browser.$(".has-error [data-schema-key='" + field + "']");

	el.waitForExist({timeout});
	el.waitForDisplayed({timeout});
});

Then(/^I should see captcha error$/, function() {
    const el = browser.$(".alert-danger");

	el.waitForExist({timeout});
	el.waitForDisplayed({timeout});
});

Then(/^I should not see error by "([^"]*)" field$/, function(field) {
    const el = browser.$(".has-error [data-schema-key='" + field + "']");

	expect(el.isExisting()).to.be.equal(false);
});

Then(/^is should show word "([^"]*)" as a suggestion$/, function(word) {
    const el = browser.$(".search-result .examples a");

	expect(el.getText()).to.be.equal(word);
});

Then(/^the modal should open$/, function() {
    const body = browser.$("body");
    const el = browser.$("body.modal-open");

    body.waitForDisplayed();

    el.waitForExist({timeout});
    el.waitForDisplayed({timeout});

    expect(el.isExisting()).to.be.equal(true);
});

Then(/^the navigation buttons should be available$/, function() {
    const el = browser.$(".nav-bottom");

    el.waitForExist({timeout});
    el.waitForDisplayed({timeout});
});

Then(/^the video starts playing$/, function() {
    browser.pause(1000);
    browser.waitUntil(function() {
        return browser.execute("return YT_APP.yt.player.getPlayerState()") === 1; //playing according to YT API
    }, {timeout});

    previousTime = browser.execute("return YT_APP.yt.player.getCurrentTime()");
});


Then(/^the video should start playing 5s before$/, function() {
	let current = browser.execute("return YT_APP.yt.player.getCurrentTime()");

	expect(current).to.be.lessThan(previousTime);
});

Then(/^the video should start playing at start time$/, function() {
	expect(browser.execute("return Math.floor(YT_APP.yt.player.getCurrentTime())")).to.be.equal(10);
});

Then(/^the search bar should be visible$/, function() {
    const el = browser.$(".query");

    el.waitForExist({timeout});
    el.waitForDisplayed({timeout});
});


Then(/^I should be redirected to a result page$/, function() {
	expect(browser.getUrl()).to.match(/prononciation\/[^\/]+$/ig);
});

Then(/^the video should be available$/, function() {
    const playerContainer = browser.$(".video-player");
    const player = browser.$("#player");

    playerContainer.waitForExist({timeout});
    playerContainer.waitForDisplayed({timeout});

    player.waitForExist({timeout});
    player.waitForDisplayed({timeout});
});


Then(/^the word "([^"]*)" should be highlighted$/, function(word) {
    const el = browser.$(".video-caption strong");

	expect(el.getText()).to.be.equal(word);
});


Then(/^the "([^"]*)" arrow should be visible$/, function(arrow) {
    const el = browser.$(".nav-" + arrow);

    el.waitForDisplayed();
});

Then(/^the "([^"]*)" arrow should not be visible$/, function(arrow) {
    const el = browser.$(".nav-" + arrow);


	expect(el.isExisting()).to.be.equal(false);
});
