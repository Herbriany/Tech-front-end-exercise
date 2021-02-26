describe('The Home Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080')
    })

    it("loads a product into the basket and then loads the basket page", () => {
        cy.get('.product-button').first().click()
        
        cy.get('.header-basket-button')
          .click()

        cy.url()
            .should('eq', 'http://localhost:8080/trolley')
    })

    it("loads empty basket page", () => {
        cy.get('.header-basket-button')
          .click()
    })

    it("loads two products to basket then empties basket", () => {
        cy.get('.product-button').first().click().click()

        cy.get('.header-basket-button')
            .click()

        cy.get('[name="empty basket"]')
            .click()
    })
  })