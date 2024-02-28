describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost/youfit/')
    })

  
      it('login a new user', () => {
        cy.visit('http://localhost/youfit/')    
        cy.get(':nth-child(1) > .form-control').type('manojpj1201@gmail.com')
        cy.get(':nth-child(2) > .form-control').type('admin')
        cy.get('.btn').click()
        })
  })