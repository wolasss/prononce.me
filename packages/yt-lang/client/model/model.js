var getUserLanguage = function () {
  return "en";
};


Meteor.startup(function () {
  TAPi18n.setLanguage(getUserLanguage())
  .done(function () {
  
  })
  .fail(function (error_message) {
    // Handle the situation
    console.log(error_message);
  });
});