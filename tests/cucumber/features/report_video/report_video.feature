Feature: Report video

  	Scenario: User cant report a video when not providing all necessary fields
    	Given I have visited page with "amazing" word
    	Then the navigation buttons should be available
        When user click button "report"
        Then the modal should open
        And captcha should be visible
        When I click submit button
        Then I should see error by "issue" field
        When I choose "issue_not_lang" option from "issue" field
        And I click submit button
        Then I should see captcha error
        And I should not see error by "issue" field