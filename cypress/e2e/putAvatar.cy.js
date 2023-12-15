describe('update profile media', () => {
  it('can update its avatar and see the changes', () => {
    cy.login();
    cy.wait(1000);
    cy.get('#header-profile').click();
    cy.contains('knallis').click();
    cy.wait(1000);
    cy.get('#change-avatar').click();
    cy.get('#avatar').invoke(
      'val',
      'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTbHlXAiDLTDtsWQz69DnpyYuk2OaIv8RP0Sos7cOzNWMYSKsUTszCnmdnyNrbg4DNpUopunxB5mXL2EYhLNg8',
    );
    cy.get('#submit').click();
    cy.get('#avatar-img').should(
      'have.attr',
      'src',
      'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTbHlXAiDLTDtsWQz69DnpyYuk2OaIv8RP0Sos7cOzNWMYSKsUTszCnmdnyNrbg4DNpUopunxB5mXL2EYhLNg8',
    );
  });
});
