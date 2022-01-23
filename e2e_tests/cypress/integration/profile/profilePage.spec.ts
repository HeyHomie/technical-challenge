// <reference types="cypress" />

context("Profile Page e2e test", () => {
  beforeEach(() => {
    cy.visit("/midudev?tab=repositories");
    cy.wait(1000);
  });

  it("should render profile page", () => {
    cy.get("[data-cy=profile-page]").should("be.visible");
  });

  it("should type in query input and search", () => {
    cy.get("#search-input").click();
    cy.get("#search-input").type("hello");
  });

  it("should click on type select", () => {
    cy.get("#type-select").click();
  });

  it("should click on language select", () => {
    cy.get("#language-select").click();
  });

  it("should click on sort select", () => {
    cy.get("#sort-select").click();
  });

  it("should click on direction select", () => {
    cy.get("#direction-select").click();
  });
});
