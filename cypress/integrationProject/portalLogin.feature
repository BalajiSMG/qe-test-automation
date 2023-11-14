Feature: portalLogin

    Regression Portal Login
    Scenario: Login to Portal application using SSO
    Given Open Portal application "https://mfa-portal.services.dev.smg.com/"
    Then Enter sso emailId
    Then User clicks on Continue button

    Scenario: Login to error message in Portal application
    Given Open Portal application "https://mfa-portal.services.dev.smg.com/"
    Then Enter invalid sso emailId
    Then User clicks on Continue button
    Then User verifies the error

