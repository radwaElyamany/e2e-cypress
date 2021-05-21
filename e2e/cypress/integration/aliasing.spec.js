describe("Text box with max chars", () => {
  it("display the appropriate remaining chars count", () => {
    cy.visit("http://localhost:3000/example-3");

    cy.get("[data-cy='last-name-chars-left-count']").as("charsLeftSpan");
    cy.get("[data-cy='input-last-name']").as("charInput");

    cy.get("@charsLeftSpan").invoke("text").should("equal", "15");

    cy.get("@charInput").type("hello");

    cy.get("@charsLeftSpan").invoke("text").should("equal", "10");

    cy.get("@charInput").type(" my friend");

    cy.get("@charsLeftSpan").invoke("text").should("equal", "0");
  });

  it("prevent the user from typing more chars once max is exceeded", () => {
    cy.visit("http://localhost:3000/example-3");

    cy.get("[data-cy='input-last-name']").as("charInput");

    cy.get("@charInput").type("abcdefghijklmnopqrstuvwxyz");

    cy.get("@charInput").should("have.attr", "value", "abcdefghijklmno");
  });
});
