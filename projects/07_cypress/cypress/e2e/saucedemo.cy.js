describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://www.saucedemo.com/');
        // cy.contains('div', 'Swag Labs').should('be.visible');
        cy.get('input[data-test="username"]').type('standard_user');
        cy.get('input[data-test="password"]').type('secret_sauce');
        cy.get('input[data-test="login-button"]').click();

        cy.get('span[data-test="title"]').should('be.visible');
    })
})


describe('TS Cart', ()=>{

    beforeEach(() => {
        cy.login('standard_user','secret_sauce');
    });

    it('Add items into cart', ()=>{
        
    });

});