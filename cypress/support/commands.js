/* eslint-disable */

Cypress.Commands.add('login', () => {
  cy.visit('https://darling-hamster-2c4e31.netlify.app/login.html').wait(1000);

  cy.get('#email')
    .invoke('val', 'knallis@stud.noroff.no')
    .should('have.value', 'knallis@stud.noroff.no');

  cy.get('#password').invoke('val', '12345678');

  cy.get('#submit').click();

  cy.get('#my-balance').should('exist');
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
