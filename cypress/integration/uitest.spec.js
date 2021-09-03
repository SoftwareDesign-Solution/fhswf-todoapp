// uitest.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe("uitest", () => {

    it("test", () => {

        cy.visit("http://localhost:8081/");

        cy.get('#TaskCreate').click();

        cy.get('#project').click().type('{downarrow}{enter}')

        cy.get('#title').type('Hello World!');

    });

});
