import '/imports/api/words.app-tests.js';
import '/imports/api/captions.app-tests.js';

Meteor.startup(function() {
    reCAPTCHA.config({
        privatekey: YT_APP.Settings.Google.captcha_key
    });
});

if(process.env.NODE_ENV !== 'production') {
    Meteor.call('fixtures/loadTestCaptions');
    Meteor.call('fixtures/loadTestWords');
}
