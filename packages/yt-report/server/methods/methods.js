Meteor.methods({
	'reports/send': function(doc){
		check(doc, Object);
		check(doc.transcriptId, String);
		check(doc.issue, String);

		return YT_APP.Reports.insert(doc);
	}
});