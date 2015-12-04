Feature: Donation possibilities for users
	
    @watch
  	Scenario: User donates
    	Given I have visited home page
    	Then the coffee button should be visible
    	When I click on the coffee button 
        Then the donation modal should open
        And the paypal button should be visible
        When I click on paypal button
        Then I should be redirected to paypal site