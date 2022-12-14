/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade Pré cadastro', () => {

    before(() => {
        cy.visit('minha-conta')
        
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        let nomefaker = faker.name.firstName()
        let sobrenomefaker = faker.name.lastName()
        let emailfaker = faker.internet.email(nomefaker)
        
        cy.get('#reg_email').type(emailfaker) 
        cy.get('#reg_password').type(faker.internet.password())      
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomefaker)    
        cy.get('#account_last_name').type(sobrenomefaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click() 
    });
   
});