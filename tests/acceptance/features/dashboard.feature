Feature: user dashboard

    As a user
    I want to access my dashboard
    So that I can create events

    Background:
        Given the user has been created with following credential
            | firstName | mo            |
            | lastName  | doe           |
            | email     | mo3@gmail.com |
            | password  | Password@123  |
        And the user has logged with email "mo3@gmail.com" and password "Password@123"

    Scenario: create event with valid information
        Given the user has opened new event sidebar
        When the user creates an event with following information using webUI
            | eventName      | Mock test                         |
            | description    | Mock test for network programming |
            | location       | pokhara                           |
            | date           | 09-06-2020                        |
            | startTime      | 08:00                             |
            | endTime        | 10:00                             |
            | recurrenceType | Every Day                         |
        Then the event should be listed under date "09-06-2020" in webUI

