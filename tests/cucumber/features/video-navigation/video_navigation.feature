Feature: Video navigation

  	Scenario: User control the video
    	Given I have visited home page
    	Then the search bar should be visible
    	When I provide a word "never"
    	And click search button
    	Then I should be redirected to a result page
    	And the video should be available
        And the video starts playing
        And the navigation buttons should be available
        When user click button "backward"
        Then the video should start playing 5s before
        When user click button "repeat"
        Then the video should start playing at start time
        When user click button "report"
        Then the modal should open