Meteor.startup(function() {
    reCAPTCHA.config({
        theme: 'light',
        publickey: YT.Settings.Google.captcha_key
    });
});