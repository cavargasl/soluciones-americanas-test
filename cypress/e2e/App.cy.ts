describe('firs render', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Render the app', () => {
    cy.get('div').should('have.id', 'root')
  })

  it('should render a grid layout with an aside and a main section', () => {
    cy.get('div').should('have.class', 'grid').children("aside")
    cy.get('div').should('have.class', 'grid').children("main")
  })

  it('should contain a navigation menu with links to different pages', () => {
    cy.get('aside').children('nav').children('ul').children().should('have.length', 5)
    cy.url().should('eq', 'http://localhost:5173/')

    cy.get('[data-cy="/login"]').click()
    cy.url().should('eq', 'http://localhost:5173/login')

    cy.get('[data-cy="/register"]').click()
    cy.url().should('eq', 'http://localhost:5173/register')

    cy.get('[data-cy="/newUser"]').click()
    cy.url().should('eq', 'http://localhost:5173/newUser')

    cy.get('[data-cy="/users"]').should('be.disabled')
  })

  it('should available links when user is logged in', () => {
    cy.get('[data-cy="/login"]').click()
    cy.get('input[name="email"]').type('michael.lawson@reqres.in')
    cy.get('input[name="password"]').type('ASD123a.')
    cy.get('button[type="submit"]').click()
    cy.url().should('eq', 'http://localhost:5173/users')
    cy.get('table').should('exist')
    cy.contains('Avatar').should('exist')
    cy.get('[data-cy="/users"]').should('not.be.disabled')
    cy.get('[data-cy="/login"]').should('be.disabled')
    cy.get('[data-cy="/register"]').should('be.disabled')
    cy.get('[data-cy="logout"]').should('have.text', 'Logout').click()
    cy.url().should('eq', 'http://localhost:5173/login')
  })
})