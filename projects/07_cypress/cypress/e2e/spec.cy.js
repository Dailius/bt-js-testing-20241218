describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')

    const millis = 3000;

    cy.wait(millis);
    cy.viewport(300, 600);

    cy.wait(millis);
    cy.viewport(1000, 600);
    
    cy.wait(millis);
    cy.visit('https://sweetshop.netlify.app/')

    cy.wait(millis);
    cy.viewport(600, 1000);

    cy.wait(millis);
    cy.viewport('ipad-2');

  })
})