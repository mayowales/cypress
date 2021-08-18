
describe('login form demoapp', () => {

    it('successfully load and login', () => {
        cy.visit('http://demo.applitools.com/index.html')
       
      cy.get('#username').type("itsi")
      cy.get('#password').type('mayo')
      cy.get('input.form-check-input').click
      cy.get('#log-in').click()
 
    })

    it('login should fail with wrong username', () => {
        cy.visit('http://demo.applitools.com/index.html')
       
      cy.get('#username').type("its")
      cy.get('#password').type('mayo')
      cy.get('input.form-check-input').click
      cy.get('#log-in').click()
 
    })

    it('login should fail with wrong password', () => {
        cy.visit('http://demo.applitools.com/index.html')
       
      cy.get('#username').type("itsi")
      cy.get('#password').type('may')
      cy.get('input.form-check-input').click
      cy.get('#log-in').click()
    })

    it('login should fail with wrong username and password', () => {
        cy.visit('http://demo.applitools.com/index.html')
       
      cy.get('#username').type("its")
      cy.get('#password').type('may')
      cy.get('input.form-check-input').click
      cy.get('#log-in').click()
    }) 

     
})