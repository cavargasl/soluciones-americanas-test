describe('firs render', () => {
  it('Render the app', () => {
    cy.visit('/')
    cy.get('div').should('have.id', 'root')
  })
})