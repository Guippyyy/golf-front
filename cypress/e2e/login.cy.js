require = "../support/commands";
describe("checking if login works", () => {
  beforeEach(() => {
    cy.login();
  });
  it("ga naar profile", () => {
    cy.visit("http://localhost:3000/profile");
    

  });
});
