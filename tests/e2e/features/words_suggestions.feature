Feature: Words suggestions

  	Scenario: User see suggestions
    	Given I have visited home page
    	Then the search bar should be visible
    	When I provide a word "amaze"
    	And click search button
    	Then I should be redirected to a result page
    	And I should see ".search-result span"
        And I should see ".search-result .examples"
        And I should see ".search-result .examples a"
        And is should show word "amazing" as a suggestion
        When I click on ".search-result .examples a"
        Then I should be redirected to a result page
