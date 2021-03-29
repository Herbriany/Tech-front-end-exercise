describe('A11y', () => {
    it('home page accessibility', () => {
        cy.checkPageA11y('http://localhost:8080/')
    })

    it('empty basket page accessibility', () => {
        cy.visit('http://localhost:8080/')
        cy.get('.header-basket__button').click()
        cy.injectAxe()
        cy.checkA11y(null, { includedImpacts: ['critical'] })
    })

    it('non empty basket page accessibility', () => {
        cy.visit('http://localhost:8080/')
        cy.get('.product > button').first().click()
        cy.get('.header-basket__button').click()
        cy.injectAxe()
        cy.checkA11y(null, { includedImpacts: ['critical'] })
    })
})