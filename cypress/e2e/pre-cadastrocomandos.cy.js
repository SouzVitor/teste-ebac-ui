/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade Pré cadastro', () => {

    before(() => {
        cy.visit('minha-conta')
        
    });
 
 
 it('Deve completar o pré-cadastro com sucesso usando Comandos customizados', () => {
        let emailFaker2 = faker.internet.email()
        cy.preCadastro(emailFaker2, 'senha!forte', 'Vitor', 'Souza')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
});
