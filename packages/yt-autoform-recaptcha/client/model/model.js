AutoForm.addInputType("recaptcha", {
  template: "afRecaptcha",
  valueOut: function () {
    return $('#g-recaptcha-response').val();
  }
});