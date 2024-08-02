/// <reference types="cypress"/>
import  ProdutosPage  from "../../support/page-objects/produtos.page";

describe('funcionalidade protudo', () => {

beforeEach(() => {
   cy.visit('produtos')
}); 

    it('Deve selecionar um produto da lista ', () => {
        cy.get(' .product-block')
            //.last()
            //.first()
            .eq(2)
            .click()
            cy.get('#tab-title-description > a'). should('contain','Descrição')

        
    });

    it('deve selecionar um produto da lista ', () => {
        ProdutosPage.buscarProtudoLista("Aero Daily Fitness Tee")
        cy.get('#tab-title-description > a'). should('contain','Descrição')
        

    });
    it('deve buscar um protudo com sucesso', () => {
        ProdutosPage.buscarProduto('Aether Gym Pant')
        cy.get('#tab-title-description > a'). should('contain','Descrição')
        
    });

    it('deve visitar pagina do produto ', () => {
        ProdutosPage.visitarProdutos('abominable hoodie')
        cy.get('#tab-title-description > a'). should('contain','Descrição')
    });

    it('deve adicioner um produto ao carrinho', () => {
        ProdutosPage.visitarProdutos('Atlas Fitness Tank')
        ProdutosPage.addPtodutroCarrinho('M' ,'Blue',5)
        cy.get('.woocommerce-message').should('contain','foram adicionados no seu carrinho.') //   || ('contain' , 'foram adicionados no seu carrinho.')
    });

    it.only('deve adicioner um produto ao carrinho buscando da massa de dados', () => {
       cy.fixture('produtos').then(dados =>{
        ProdutosPage.visitarProdutos(dados[0].nomeProduto)
        ProdutosPage.addPtodutroCarrinho(
            dados[0].cor,
            dados[0].tamanho,
            dados[0].quantidade
        )
        cy.get('.woocommerce-message').should('contain',dados[0].nomeProduto) 
   
       })
        
    });




});