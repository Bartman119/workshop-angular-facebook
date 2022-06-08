describe('General', () => {
  it('Is project name visible', () => {
    cy.visit('/')
    cy.contains('Facebook2')
  })
})
