Meteor.startup(function() {
    reCAPTCHA.config({
        privatekey: YT_APP.Settings.Google.captcha_key
    });
});