///<reference types = "cypress"/>

describe('#FoundItOnAmazon', () => {
    it('should have #FoundItOnAmazon', () => {
        cy.visit('/')
        cy.get('.hm-icon').click()
        cy.get('.hmenu-item').contains('#FoundItOnAmazon').click()
        cy.intercept("GET","finds?ref_=nav_em_allpf_foundit_d_0_1_1_30").as('found')
        cy.wait('@found')
    });
});