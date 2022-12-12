describe("mijn eerste test", () => {
  beforeEach(() => {
    cy.login();
  });
  it("draait de applicatie", () => { // 👈 1
    cy.visit('http://localhost:3000/Stats'); // 👈 2
  });
});

describe("transaction", () => {
  it("show transaction", () => {
    cy.visit('http://localhost:3000/scoreCard')
    cy.intercept(
      "GET",
      "http://localhost:3001/api/courses",
    )
  })
})