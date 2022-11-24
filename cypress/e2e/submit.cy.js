
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/scoreCard');
    cy.get('[data-cy=submit]').click()
  })
})