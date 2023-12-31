/* eslint-disable linebreak-style */

describe('Login', () => {
  it('successfully logs in', () => {

    cy.intercept('GET', '**/notes').as('getNotes')
    cy.guiLogin()

    cy.contains('h1', 'Your Notes').should('be.visible')
    cy.contains('a', 'Create a new note').should('be.visible')
  })
})

