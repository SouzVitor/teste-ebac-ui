/// <reference types="cypress"/>

describe('Funcionalidade Página de produtos', () => {

 beforeEach(() => {
    cy.visit('produtos/')

    });

    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'M', 'Red', 4)

    });   
        
    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Abominable Hoodie', 'XS', 'Blue', 2)

    });


});