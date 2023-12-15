describe('post listing', () => {
  it('can post new listing and view it', () => {
    cy.login();
    cy.wait(1000);
    cy.get('#header-profile').click();
    cy.contains('Create new listing').click();
    cy.get('#title').invoke('val', 'Test Listing');
    cy.get('#description').invoke('val', 'Test description');
    cy.get('#image-input').invoke(
      'val',
      'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSE3zNnbeADg_Mk-hQ_A-cKTuUtXqdxfeAYYFOP7bGqkbXfp5fNMVVJcWwi7fRDLXg7xkmTSGGk2HqrsOQ8EYg',
    );

    cy.get('#end-date').invoke('val', '2024-12-14T12:00:00').invoke('change');
    cy.get('#tags').invoke('val', 'test tag').type('{enter}');
    cy.get('#submit').click();
    cy.url().should('include', 'listing');
  });
});
