Feature: Words suggestions
    
    @watch
  	Scenario: User see suggestions
    	Given I have visited home page
    	Then the search bar should be visible
    	When I provide a word "amaze"
    	And click search button
    	Then I should be redirected to a result page
    	And it should show no results
        And it should show words suggestions
        And is should show word "amazing" as a suggestion
        When I click a word "amazing"
        Then I should be redirected to a result page