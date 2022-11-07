/// <reference types="cypress" />

context('Teste de ponta a ponta lojaebac', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
    });

    it.only('Deve fazer login com sucesso', () => {
        cy.get('#username').type('vitor123_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('vitor123_ebac@teste.com')
        cy.get('#password').type('treino@teste.com')
        cy.get('.woocommerce-form > .button').click()


    })

});