Template.ytReportModal.helpers({
	getSchema: function() {
		return YT_APP.ReportsSchema;
	},
	getSubmitButtonTranslation: function() {
		return TAPi18n.__("send");
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
					Alerts.error(TAPi18n.__("wrong_captcha"), "recaptcha_alerts");
					self.done(new Error("Captcha Error"));
				} else {
					Meteor.call("reports/send", insertDoc, function(err, res){
						Alerts.success(TAPi18n.__("thanks_contribution"), "video_alerts");
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