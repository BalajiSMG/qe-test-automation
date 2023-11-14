Feature: Entity Request

    Regression Entity

    Scenario: Create a New Entity request and verify the same has been created
    Given Create new entity request is POSTED with correct Request in the body of the endpoint
    Then Verify if 201 status code is displayed