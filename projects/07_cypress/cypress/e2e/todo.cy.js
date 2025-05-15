describe('template spec', () => {
  it('Loads header', () => {
    cy.visit('https://todolist.james.am/#/')
    cy.contains('h1', "To Do List").should('be.visible')
  })

  it('Loads footer', () => {
    cy.visit('https://todolist.james.am/#/')
    cy.contains('p', "Double-click to edit a todo").should('be.visible')
  })

  it('Input display placeholder', () => {
    cy.visit('https://todolist.james.am/#/')
    cy.get('input').should('have.attr', 'placeholder', "What need's to be done?");
  })
})