require = ('../support/commands')
describe('forms', () => {
  beforeEach (() => {
    cy.login()
  })
  it('should show validation errors when leaving all fields blank', () => {
    cy.visit('http://localhost:3000/play')
    cy.get('[data-cy="submit1"]').click()
  })
})