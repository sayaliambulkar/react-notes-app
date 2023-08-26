describe('Renders app header', () => {
      beforeEach(() => {
            cy.visit('http://localhost:3000')
      })

      it('Scenario: Displays app logo', () => {
            cy.get('[data-testid="notes-logo"]').should('be.visible')
      })
})
