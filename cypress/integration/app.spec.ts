describe('Navigation', () => {
  it('should navigate to the home page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // The new page should contain an h1 with "Snappy"
    cy.get('h2').contains('Snappy');
  });
});

const asModule = {};
export default asModule;
