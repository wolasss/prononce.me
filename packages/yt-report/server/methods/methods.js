Meteor.methods({
	'reports/send': function(doc){
		check(doc, Object);
		check(doc.transcriptId, String);
		check(doc.issue, String);

		return YT.Reports.insert(doc);
	}
});