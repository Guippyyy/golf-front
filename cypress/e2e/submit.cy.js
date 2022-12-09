require = ('../support/commands')
describe('empty spec', () => {
  beforeEach(() => {
    cy.login();
  });
  it('passes', () => {
    cy.visit('http://localhost:3000/profile'); 
  })
})