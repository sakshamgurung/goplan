Feature: user signup

    As a user
    I want to signup for new account
    So that I can manage my plan

    Scenario: create valid user
        Given the user has browsed to the signup page
        When the user signup with following data using the webUI
            | firstName | mo            |
            | lastName  | doe           |
            | email     | mo3@gmail.com |
            | password  | Password@123  |
        Then the user should be in login page
        And the message "Sign up successful" should appear