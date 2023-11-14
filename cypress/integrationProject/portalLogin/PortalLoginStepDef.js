import { Then, Given, And } from "@badeball/cypress-cucumber-preprocessor"

Given('Open Portal application {string}',(url)=>{
      // Assert that the single sign-on button is visible
      cy.visit(url)
    })
    Then('Enter sso emailId', () => {
      cy.origin('https://dev-smgportal.us.auth0.com', () => {
        cy.get('#username').type("balaji.kanthimathinathan@smg.com")
      })
    })
  Then('User clicks on Continue button', () => {
    cy.origin('https://dev-smgportal.us.auth0.com', () => {
      cy.contains('Continue').should('be.visible')
      // Click on the single sign-on button
      cy.contains('Continue').click()
    })
  })

  Then('Enter invalid sso emailId', () => {
    cy.origin('https://dev-smgportal.us.auth0.com', () => {
      cy.get('#username').type("balaji")
    })
  })

  Then('User verifies the error', () => {
    cy.origin('https://dev-smgportal.us.auth0.com', () => {
      cy.get('.ulp-input-error-icon').should('have.text',"Email is not valid.").and("be.visible")
    })
  })
//})
