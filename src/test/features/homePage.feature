Feature: Home page

Background:
    Given I navigate to SwagLabs site
    When I log in with user "standard_user" and password "secret_sauce"

Scenario: The display of the home page is correct
    Then the home page display is correct

Scenario: Each product has all the relevant information
    Then the correct elements of all products are shown

Scenario: I can add a product to the cart
    When I click on "ADD TO CART" on a random product
    Then the product is added to the cart