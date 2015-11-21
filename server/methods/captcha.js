Meteor.methods({
    'captcha/validate': function(key) {
        check(key, String);

        var verifyCaptchaResponse = reCAPTCHA.verifyCaptcha(this.connection.clientAddress, key);

        return verifyCaptchaResponse.data;
    }
});