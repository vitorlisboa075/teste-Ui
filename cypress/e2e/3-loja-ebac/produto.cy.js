/// <reference types="cypress"/>

describe('funcionalidade protudo', () => {

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
});

    it('Deve selecionar um produto da lista ', () => {
        cy.get(' .product-block')
            //.last()
            //.first()
            .eq(2)
            .click()
            cy.get('#tab-title-description > a'). should('contain','Descrição')

        
    });





    
});