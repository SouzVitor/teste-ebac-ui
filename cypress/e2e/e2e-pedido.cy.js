/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Teste de ponta a ponta lojaebac', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('vitor123_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
    })

    it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
    })

    it('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
        cy.get('#username').type(dados.usuario)
        cy.get('#password').type(dados.senha,{log:false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')

        })
        
    })

        it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
            cy.get('#username').type('vitor123_ebac@teste.com')
            cy.get('#password').type('treino@teste.com')
            cy.get('.woocommerce-form > .button').click()

    })

    });