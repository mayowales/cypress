
describe('my first cypress test', () => {
    it('should show error message with wrong password', () => {
        //user should be able to navigate to the website
      cy.visit('/') 
     // user should be able t
      cy.get('.nav__button-secondary').click()

      it*

      cy.url().should('include', 'login')

      cy.get('#username').type("walekolade45@gmail.com")
      cy.get('#password').type('wrongpassword')
      cy.get('.btn__primary--large').click()

    })

    it('successfully load and login', () => {
        cy.visit('/')
        cy.get('.nav__button-secondary').click()
        cy.url().should('include', 'login')

        cy.get('#username').type("walekolade45@gmail.com")
        cy.get('#password').type("Mayo#213")
        cy.get('.btn__primary--large').click()


    })

  })


  
  