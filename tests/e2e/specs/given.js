import { Given } from 'cucumber';

const ROOT_URL = process.env.ROOT_URL || 'http://localhost:3000'; //TODO

Given(/^I have visited "([^"]*)" page$/, function(path) {
    browser.url(`${ROOT_URL}${path}`);
});

Given(/^I have visited home page$/, function() {
    browser.url(ROOT_URL);
});

Given(/^I have visited page with "([^"]*)" word$/, function(word) {
    browser.url(`${ROOT_URL}/prononciation/${word}`);
});
