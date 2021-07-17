describe('Form Test', () => {
    it(('Testing Pizza Form'), () => {
        cy.visit('localhost:3000/pizza');
        cy.get('input[name="name"]').type('Big Ol Pizza');
        cy.get('input[name="pepperoni"]').check();
        cy.get('input[name="green_pepper"]').check();
        cy.get('input[name="pineapple"]').check();
        cy.get('button').click();
    })
})