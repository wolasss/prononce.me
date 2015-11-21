Meteor.startup(function() {
    reCAPTCHA.config({
        privatekey: YT.Settings.Google.captcha_key
    });
});