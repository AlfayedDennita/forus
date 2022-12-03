/**
 * Test Scenario
 *
 * - Sign In spec
 *  - should display the sign in link button on the home page
 *  - should navigate the user to the sign in page when the sign in link button on the home page clicked
 *  - should display an error message when the email field is empty
 *  - should display an error message when the email field is filled by invalid email
 *  - should display an error message when the password field is empty
 *  - should display an error alert when the email or password is wrong
 *  - should display the home page when the email and password are correct
 */

describe('Sign In spec', () => {
  it('should display the sign in link button on the home page', () => {
    cy.visit('http://localhost:5173/');
    cy.get('a').contains('Sign In').should('be.visible');
  });

  it('should navigate the user to the sign in page when the sign in link button on the home page clicked', () => {
    cy.get('a').contains('Sign In').click();

    cy.get('h1').contains('Sign In to Forus');
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.get('button').contains('Sign In').should('be.visible');
  });

  it('should display an error message when the email field is empty', () => {
    cy.get('button').contains('Sign In').click();
    cy.contains('Email field must be filled.').should('be.visible');
  });

  it('should display an error message when the email field is filled by invalid email', () => {
    cy.get('input[type="email"]').type('felix');
    cy.get('button').contains('Sign In').click();
    cy.contains('Must be a valid email.').should('be.visible');
  });

  it('should display an error message when the password field is empty', () => {
    cy.get('input[type="email"]').type('@joe.com');
    cy.get('button').contains('Sign In').click();
    cy.contains('Password field must be filled.').should('be.visible');
  });

  it('should display an error alert when the email or password is wrong', () => {
    cy.get('input[type="password"]').type('wrong-password');
    cy.get('button').contains('Sign In').click();
    cy.contains('Email or password is wrong').should('be.visible');
  });

  it('should display the home page when the email and password are correct', () => {
    cy.get('input[type="password"]').clear().type('felix123');
    cy.get('button').contains('Sign In').click();

    cy.get('button > span').contains('Sign Out');
    cy.get('button').contains('Create Thread');
    cy.get('h2').contains('All Threads');
  });
});
