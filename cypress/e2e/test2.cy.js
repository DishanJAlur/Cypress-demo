describe('MyTestSuite', () => {
  
    it('Verify Title Of The Profile Page', () => {
      cy.visit('http://localhost/profilepage/')
       cy.title().should('eq','Profiles - Login Demo')
    })
  
    it('Verify heading Of The Profile Page', () => {
      cy.visit('http://localhost/profilepage/')
      cy.get('#center-set').contains('Bapuji Engineering and Technology')
    })
  
    it('Create new user', () => {
      
      cy.on('uncaught:exception', (err, runnable) => {
      //expect(err.message).to.include('something about the error')
      //done()
      return false
      })
  
      cy.visit('http://localhost/profilepage/')
      cy.get('#fname').type('Santos')
      cy.get('#lname').type('Naval')
      cy.get('#email').type('Sans@gmail.com')
      cy.get('#username').type('san14')
      cy.get('#password').type('1234')
      cy.get('#btnsubmit').click()
      //cy.get('div[align="center"] > #reg-head').should('eq','Registration Success')
      //cy.contains('Submit').click()
    })
  
    it('login a new user', () => {
      cy.visit('http://localhost/profilepage/')    
      cy.get('#tb-box6').type('san14')
      cy.get('#tb-box7').type('1234')
      //cy.get('#btnlogin').click()
      })
  
      it('Verify Username', () => {
        cy.visit('http://localhost/profilepage/')
        cy.get('#tb-box6').type('san14')
        cy.get('#tb-box7').type('1234')
        cy.get('#btnlogin').click()
        //cy.get('td.tl-4').should('eq','san15')
        cy.get('tbody > :nth-child(2)').find('.tl-4').contains('san14')
       })
  
       it('Verify Name', () => {
        cy.visit('http://localhost/profilepage/')
        cy.get('#tb-box6').type('san14')
        cy.get('#tb-box7').type('1234')
        cy.get('#btnlogin').click()
        cy.get('tbody > :nth-child(3)').find('.tl-4').contains('Santos Naval')
       })
  
       it('Verify Email', () => {
        cy.visit('http://localhost/profilepage/')
        cy.get('#tb-box6').type('san14')
        cy.get('#tb-box7').type('1234')
        cy.get('#btnlogin').click()
        cy.get('tbody > :nth-child(4)').find('.tl-4').contains('Sans@gmail.com')
       })
  
       it('Verify User Logout', () => {
        cy.visit('http://localhost/profilepage/')
        cy.get('#tb-box6').type('san14')
        cy.get('#tb-box7').type('1234')
        cy.get('#btnlogin').click()
        cy.get('#btnlogout').click()
       })
  
       it('Verify delete User', () => {
        cy.visit('http://localhost/profilepage/')
        cy.get('#tb-box6').type('san14')
        cy.get('#tb-box7').type('1234')
        cy.get('#btnlogin').click()
        cy.get('#btndel').click()
        cy.get('a').click()
       })
  })