Template.registerHelper("ytExamples", function(){
	var set = Meteor.settings.public.examples || [];

	return _.shuffle(set).slice(0, 6);
});