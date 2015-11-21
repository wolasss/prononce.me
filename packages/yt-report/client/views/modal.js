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
			this.event.preventDefault();

			var captcha = $('#g-recaptcha-response').val();
			var self = this;

			Meteor.call("captcha/validate", captcha, function (error, result) {
				if(error || !result.success) {
					//wrong captcha
					console.log("wrong captcha");
					self.done(new Error("Captcha Error"));
				} else {
					Meteor.call("reports/send", insertDoc, function(err, res){
						self.done();
					});
				}
			});

			return false;
		},
		onSuccess: function(formType, result) {
			$("#reportModal").modal('hide');
		},
	}
});