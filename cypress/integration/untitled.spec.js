// untitled.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:

const { createYield } = require("typescript")

// https://on.cypress.io/writing-first-test
describe('SG', () => {
    it('Visits Login page', () => {
        cy.visit('localhost:4200')
    })

    it('Selects the first user', () => {
        cy.get('select').select('Teszt Elek')
    })

    it('Enter password', () => {
        cy.get('input[id=textbox_p]').type('asd123')
    })

    it('Clicks on enter button', () => {
        cy.get('button').click()
    })

    it('Selects 6 numbers', () => {
        cy.get('button[id=randButton]').first().click()
    })

    it('Checks the text', () => {
        cy.get('p').first()
        .contains("Board")
    })
})