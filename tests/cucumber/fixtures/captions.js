var mock_captions = [{
	start: 10,
	dur: 10,
	video: "dQw4w9WgXcQ",
	text: "never gonna give you up"
}, {
	start: 10,
	dur: 10,
	video: "fe4fyhzS3UM",
	text: "look at my horse, my horse is amazing"
},
{
	start: 10,
	dur: 10,
	video: "N1G0PAPsOT0",
	text: "amazing jumper"
}];

(function () {

	Meteor.methods({
		'fixtures/removeCaptions': function () {
			return  YT_APP.Captions.remove({});
		},
		'fixtures/loadTestCaptions': function() {
			_.each(mock_captions, function(cap){
				YT_APP.Captions.insert(cap);
			});

			return true;
		}
	});

})();