/// <reference types="cypress"/>

describe('Funcionalidade de login',()=>{

    it('Deve fazer login como sucesso',()=>{

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('vitor.g.lisbo@gmail.com')
        cy.get('#password').type('lisboa2018')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, vitor.g.lisbo (não é vitor.g.lisbo?')

    })

})