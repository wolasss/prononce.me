Feature: Find word in some youtube videos

  	Scenario: Find word in one youtube video
    	Given I have visited home page
    	Then the search bar should be visible
    	When I provide a word "never"
    	And click search button
    	Then I should be redirected to a result page
    	And the video should be available
    	Then the word "never" should be highlighted

    Scenario: Find word in a few youtube videos
        Given I have visited home page
        Then the search bar should be visible
        When I provide a word "amazing"
        And click search button
        Then I should be redirected to a result page
        And the video should be available
        Then the word "amazing" should be highlighted
        And the "next" arrow should be visible
        And the "previous" arrow should not be visible
        When I click "next" arrow
        Then the video should be available
        And the word "amazing" should be highlighted
        And the "previous" arrow should be visible
        And the "next" arrow should not be visible
        When I click "previous" arrow
        Then the video should be available
        And the word "amazing" should be highlighted
        And the "next" arrow should be visible
