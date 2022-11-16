///<reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
   beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados =>{
    cy.login(dados.usuario, dados.senha)
    })
    
   });
    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Cheyenne', 'Lima', 'VGS Consult', 'Brasil', 'Rua Praia Canoa Quebrada', '262', 'Manaus', 'Amazonas', '69041360', '92 984690615', 'cheyenne@vgsconsult.com.br')
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
        
        
    });
});