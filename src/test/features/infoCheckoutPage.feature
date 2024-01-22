Feature: Shipping information page

Background:
    Given I navigate to SwagLabs site
    When I log in with user "standard_user" and password "secret_sauce"
    When I click on "ADD TO CART" on a random product
    When I click on the cart
    When I click on the "CHECKOUT" button 

@wip
Scenario: Complete the shipping information form
    When I fill the form of the shipping information