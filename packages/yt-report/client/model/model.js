YT_APP.ReportsSchema = new SimpleSchema({
	issue: {
		type: String,
		label: function() {
			return TAPi18n.__("what_issue");
		},
		max: 200,
		autoform: {
			type: "select-radio",
			options: function () {
				return [
					{value: "issue_not_lang", label: TAPi18n.__("issue_not_lang")},
					{value: "issue_captions", label: TAPi18n.__("issue_captions")},
					{value: "issue_sound", label: TAPi18n.__("issue_sound")},
					{value: "issue_video", label: TAPi18n.__("issue_video")},
					{value: "issue_does_not_work", label: TAPi18n.__("issue_does_not_work")},
					{value: "issue_shocking", label: TAPi18n.__("issue_shocking")}
				];
			}
		}
	},
	comment: {
		type: String,
		label: function() {
			return TAPi18n.__("comment");
		},
		optional: true,
		max: 1000,
		autoform: {
			rows: 3
		}
	},
	transcriptId: {
		type: String,
		autoform: {
			type: "hidden",
			label: false
		},
		defaultValue: ""
	},
	captcha: {
		type: String,
		label: function() {
			return TAPi18n.__("bot_verification");
		},
		optional: true,
		autoform: {
			type:"recaptcha"
		}
	}
});