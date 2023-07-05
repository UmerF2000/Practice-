require('cypress-xpath')

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com')

    cy.contains("Images").click();


   //cy.get('textarea.gLFyf',{timeout: 7000}).type('Spider man 2 PS5{enter}');

   //cy.contains('Videos').click();

  // cy.contains('News').click();

  // cy.get('textarea.gLFyf',{timeout: 7000}).clear();

  // cy.get('textarea.gLFyf',{timeout: 7000}).type('Upcoming 2023 PS5 games{enter}');

  // cy.contains("Images").click();

   //cy.contains('Videos').click();

  // cy.contains('News').click();

   //cy.get('textarea.gLFyf',{timeout: 7000}).clear();

   cy.get('textarea.gLFyf',{timeout: 7000}).type('Sonic Superstars PS5 {enter}');

   cy.contains("Images").click();


  })
})