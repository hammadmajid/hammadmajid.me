/// <reference types="cypress" />

context('Viewport', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('preview the website on multiple devices', () => {
    // cy.viewport() accepts a size to easily set
    // the screen's width and height, see:
    // https://on.cypress.io/viewport

    // We added a cy.wait() between each viewport change so you can see
    // the change otherwise it is a little too fast to see.

    cy.viewport(2999, 2999);
    cy.wait(200);
    cy.viewport('macbook-15');
    cy.wait(200);
    cy.viewport('macbook-13');
    cy.wait(200);
    cy.viewport('macbook-11');
    cy.wait(200);
    cy.viewport('ipad-2');
    cy.wait(200);
    cy.viewport('ipad-mini');
    cy.wait(200);
    cy.viewport('iphone-6+');
    cy.wait(200);
    cy.viewport('iphone-6');
    cy.wait(200);
    cy.viewport('iphone-5');
    cy.wait(200);
    cy.viewport('iphone-4');
    cy.wait(200);
    cy.viewport('iphone-3');
    cy.wait(200);
    cy.viewport('ipad-2', 'portrait');
    cy.wait(200);
    cy.viewport('iphone-4', 'landscape');
    cy.wait(200);
  });
});
