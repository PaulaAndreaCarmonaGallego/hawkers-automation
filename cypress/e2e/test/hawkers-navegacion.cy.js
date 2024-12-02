

describe("Pruebas de navegación", () => {
    
    beforeEach(() => {
        cy.visit("https://www.hawkersco.com/co/");
        cy.get("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll").click();
        
    });
        
    it("Debería navegar a la sección black friday", () => {
        cy.get(".js-button-open-menu-mobile").click();
        
        cy.get('#menu-promotions').click({ force: true });
        cy.url().should("include", "/black-friday");
    });
    
    it("Debería navegar a la sección gafas de sol", () => {
        cy.get(".js-button-open-menu-mobile").should('be.visible').click();

        cy.get('#menu-sunglasses').click({ force: true });
        cy.url().should("include", "/gafas-de-sol");
    });

    it("Debería navegar a la sección New in", () => {
        cy.get(".js-button-open-menu-mobile").click();

        cy.get('#menu-new-in').click({ force: true });
        cy.url().should("include", "/new-in");
    });

    it("Debería navegar a la sección Colaboraciones", () => {
        cy.get(".js-button-open-menu-mobile").click();

        cy.get('#menu-collaborations').click({ force: true });
        cy.url().should("include", "/colaboraciones");
    });

    it("Debería navegar a la sección Accesorios", () => {
        cy.get(".js-button-open-menu-mobile").click();

        cy.get('#menu-accessories').click({ force: true });
        cy.url().should("include", "/accesorios");
    });
});