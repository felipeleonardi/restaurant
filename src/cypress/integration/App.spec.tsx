export {}

describe('App', () => {
    it('should add reservation', () => {
        cy.visit('http://localhost:3000');
        cy.get('input').type('Felipe');
        cy.get('button').click();
        cy.get('.reservation-card-container').should('have.text', 'Felipe')
    });

    it('should not add reservation with input empty', () => {
        cy.visit('http://localhost:3000');
        cy.get('button').click();
        cy.get('.reservation-card-container').should('not.to.exist');
    });

    it('should remove reservation', () => {
        cy.visit('http://localhost:3000');
        cy.get('input').type('Tais');
        cy.get('button').click();
        cy.get('.card-remove').click();
        cy.get('.reservation-card-container').should('not.to.exist');
    });

    it('should have a customer after add reservation', () => {
        cy.visit('http://localhost:3000');
        cy.get('input').type('Tais');
        cy.get('button').click();
        cy.get('.customer-food-card-container').find('p').should('have.text', 'Tais');
    });

    it('should add foods in customer', () => {
        cy.visit('http://localhost:3000');
        cy.get('input').type('Tais');
        cy.get('button').click();
        cy.get('.customer-food-input-container').find('input').type('Orange');
        cy.get('[data-testid=add-item]').click();
        cy.get('[data-testid=customer-items]').should('have.text', 'Orange')
    });

    it('should not add food with input empty', () => {
        cy.visit('http://localhost:3000');
        cy.get('input').type('Tais');
        cy.get('button').click();
        cy.get('[data-testid=add-item]').click();
        cy.get('[data-testid=customer-items]').should('not.to.exist');
    });
})