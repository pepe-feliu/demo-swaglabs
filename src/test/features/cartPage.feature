Feature: Cart page

Background:
    Given I navigate to SwagLabs site
    When I log in with user "standard_user" and password "secret_sauce"
    When I click on "ADD TO CART" on a random product
    When I click on the cart

Scenario: The checkout button is activated
    Then the "CHECKOUT" button is enabled

Scenario: I can proceed to the checkout
    When I click on the "CHECKOUT" button

Scenario: I go back to the home page
    # When TODO
    # Then TODO

