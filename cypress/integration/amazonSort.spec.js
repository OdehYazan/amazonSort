///<reference types = "cypress"/>
import { utilities } from "../src/utilities";

describe('Amzon search', () => {
    it('should search and sort', () => {
        cy.visit('/')
        cy.get('#twotabsearchtextbox').type('mouse{enter}')
        cy.url().should('contain', 'mouse')
        cy.get('#a-autoid-0-announce').click()
        cy.get('[role="listbox"] li').its('length').should('eq', 5)
        cy.get('[role="listbox"] li:last').click()
        cy.get('[data-cel-widget^="MAIN-SEARCH_RESULTS"]:first').should('exist')
        cy.get('#a-autoid-22-announce').trigger('click').click()
        cy.get('#a-popover-3 > .a-popover-wrapper > .a-popover-inner ul li').its('length').should('eq', 5)
        cy.get('#s-result-sort-select_0').click({ force: true })
        cy.get('[data-cel-widget^="MAIN-SEARCH_RESULTS"]:first').should('exist')

    })
})

describe('#FoundItOnAmazon', () => {
    it('should have #FoundItOnAmazon', () => {
        cy.visit('/')
        cy.get('.hm-icon').click()
        cy.get('.hmenu-item').contains('#FoundItOnAmazon').click()
        cy.get('svg > title').then((found) =>{
            expect(found.text()).to.include('#FoundItOnAmazon')
        })
    });
});
