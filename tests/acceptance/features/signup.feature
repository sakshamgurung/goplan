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

    Scenario Outline: try to create user with invalid data
        Given the user has browsed to the signup page
        When the user signup with following data using the webUI
            | firstName | <firstName> |
            | lastName  | <lastName>  |
            | email     | <email>     |
            | password  | <password>  |
        Then the following message should appear
            | message | <message> |
        Examples:
            | firstName | lastName | email         | password     | message                                                                                             |
            |           |          |               |              | Sign up failed. First name cannot be empty.                                                         |
            | mo123     |          |               |              | Sign up failed. First name contains invalid characters.                                             |
            | mo        |          |               |              | Sign up failed. Last name cannot be empty.                                                          |
            | mo        | doe      |               |              | Sign up failed. Email cannot be empty.                                                              |
            | mo        | doe      | mo3           |              | Sign up failed. Email is in an invalid format.                                                      |
            | mo        | doe      | mo3@gmail     |              | Sign up failed. Email is in an invalid format.                                                      |
            | mo        | doe      | mo3@gmail.com |              | Sign up failed. Password cannot be empty.                                                           |
            | mo        | doe      | mo3@gmail.com | password     | Sign up failed. Password must contain 1 upper-case, 1 lower-case, and 1 special character (,.!@#$). |
            | mo        | doe      | mo3@gmail.com | password@    | Sign up failed. Password must contain 1 upper-case, 1 lower-case, and 1 special character (,.!@#$). |
            | mo        | doe      | mo3@gmail.com | password@123 | Sign up failed. Password must contain 1 upper-case, 1 lower-case, and 1 special character (,.!@#$). |