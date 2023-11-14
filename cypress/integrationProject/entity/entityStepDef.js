/// <reference types="Cypress" />
import {
    Given,
    Then
  } from "@badeball/cypress-cucumber-preprocessor";

  import { generateGUID } from '../utils/generateGUID.js'
  import { baseUrl,randomNumberGenerator } from '../utils/randomNumberGenerator.js'
  
  const randomProgramId = generateGUID();
  const randomNumber=randomNumberGenerator()
  const randomEntityName=`AutomationTestEntity${randomNumber}`

Given('Create new entity request is POSTED with correct Request in the body of the endpoint',()=> {
    cy.request({
        method: 'POST',
        url: baseUrl+randomProgramId,
        body: {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "name": randomEntityName,
            "accountId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "programId": randomProgramId,
            "entityTypeId": "AutoDatasource",
            "tags": {
              "additionalProp1": "test1",
              "additionalProp2": "test2",
              "additionalProp3": "test3"
            },
            "active": true,
            "audit": {
              "createdBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              "createdDateTime": "2023-05-23T12:51:52.867Z",
              "modifiedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              "modifiedDateTime": "2023-05-23T12:51:52.867Z"                
          }
      }
    }).as('createEntity');
})
Then('Verify if 201 status code is displayed',(statusCode)=>{
    cy.get('@createEntity').then((responseData)=>{
        expect(responseData.status).to.eq(201)
    })

})