import {
  Meteor
} from 'meteor/meteor';
import {
  _
} from 'meteor/underscore';

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
}, {
  start: 10,
  dur: 10,
  video: "N1G0PAPsOT0",
  text: "amazing jumper"
}];

Meteor.methods({
  'fixtures/removeCaptions': function() {
    return YT_APP.Captions.remove({});
  },
  'fixtures/loadTestCaptions': function() {
    mock_captions.forEach(function(cap) {
      YT_APP.Captions.insert(cap);
    });

    return true;
  }
});
