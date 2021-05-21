describe("Text box with max chars", () => {
  it("display the appropriate remaining chars count", () => {
    cy.visit("http://localhost:3000/example-2");

    cy.get("span").invoke("text").should("equal", "15");

    cy.get("input").type("hello");

    cy.get("span").invoke("text").should("equal", "10");

    cy.get("input").type(" my friend");

    cy.get("span").invoke("text").should("equal", "0");
  });

  it("prevent the user from typing more chars once max is exceeded", () => {
    cy.visit("http://localhost:3000/example-2");

    cy.get("input").type("abcdefghijklmnopqrstuvwxyz");

    cy.get("input").should("have.attr", "value", "abcdefghijklmno");
  });
});
