Feature: user login

    As a user
    I want to log into my account
    So that I can have access to my plan


    Scenario: try to login with invalid email
        Given the user has browsed to the login page
        When the user tries to login with email "joe@yahoo.com" and password "Password@123" using the webUI
        Then the invalid message "Email or Password is incorrect." should appear

    Scenario: create valid user
        Given the user has browsed to the signup page
        When the user signup with following data using the webUI
            | firstName | mo            |
            | lastName  | doe           |
            | email     | mo3@gmail.com |
            | password  | Password@123  |
        Then the user sholud be in login page
        And the message "SUCCESS" should appear

