Feature: user login

    As a user
    I want to log into my account
    So that I can have access to my plan


    Scenario: try to login with invalid credential
        Given the user has browsed to the login page
        When the user tries to login with email "joe@yahoo.com" and password "Password@123" using the webUI
        Then the invalid message "Email or Password is incorrect." should be displayed in the webUI

    Scenario: user login with valid credential
        Given the user has been created with following credential
            | firstName | mo            |
            | lastName  | doe           |
            | email     | mo3@gmail.com |
            | password  | Password@123  |
        And the user has browsed to the login page
        When the user tries to login with email "mo3@gmail.com" and password "Password@123" using the webUI
        Then the user should be in dashboard page

