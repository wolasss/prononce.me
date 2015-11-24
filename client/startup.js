Meteor.startup(function() {
    reCAPTCHA.config({
        theme: 'light',
        publickey: YT_APP.Settings.Google.captcha_key
    });
});