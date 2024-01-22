Feature: Authentication

Background:
    Given I navigate to SwagLabs site

Scenario: I login with valid credentials
    When I log in with user "standard_user" and password "secret_sauce"
    Then I see the home page