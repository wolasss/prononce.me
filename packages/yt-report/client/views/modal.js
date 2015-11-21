Template.ytReportModal.helpers({
	getSchema: function() {
		return YT.ReportsSchema;
	}
});

AutoForm.hooks({
	reportIssue: {
		formToDoc: function(doc) {
			doc.transcriptId = $('.report-modal').attr('data-transcript-id');
			return doc;
		},
		onSubmit: function(insertDoc, updateDoc, currentDoc) {
			console.log(insertDoc, updateDoc, currentDoc)
		}
	}
});