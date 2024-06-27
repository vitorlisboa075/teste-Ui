/// <reference types="cypress"/>

describe('Funcionalidade de login',()=>{

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    afterEach(() => {
        cy.screenshot()
    });
    it('Deve fazer login como sucesso',()=>{
        cy.get('#username').type('vitor.g.lisbo@gmail.com')
        cy.get('#password').type('lisboa2018')
        cy.get('.woocommerce-form > .button').click()

    })

    it('deve exibir uma mensagem de erro ao inserir usuario invalido ', () => {
        cy.get('#username').type('errro.g.lisbo@gmail.com')
        cy.get('#password').type('lisboa2018')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error'). should('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário')
        cy.get('.woocommerce-error'). should('exist')
    });

    it('deve exibir uma mensagem de senha invalida ', () => {
        cy.get('#username').type('vitor.g.lisbo@gmail.com')
        cy.get('#password').type('erro2018')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li'). should('exist')
        cy.get('.woocommerce-error > li'). should('contain','A senha fornecida para o e-mail vitor.g.lisbo@gmail.com está incorreta. Perdeu a senha?')

    });

})