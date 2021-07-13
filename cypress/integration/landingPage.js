
describe('Landing Page test suite4', () => {

beforeEach('open Landing Page', () => {
    cy.visit('/')
})
it('verify there are no broken links on Landing page', () => {
    cy.checkBrokenLinks()
})
it('verify links in header', () => {
    cy.get ('.menu-name-main-menu [id*=menu-item]').as('itemSelectorList')
    cy.get ('.menu-name-main-menu').as('itemSelector')
    cy.checkHeaderLinks()
    })
it('verify "Request a demo" button', () => {
    const text = 'Ready to chat? Tell us about yourself.'
     cy.contains('span', 'Request a demo').then(buttons => {
         cy.wrap(buttons[0]).click()
         cy.get('.main-head').should('contain', text)
     }) 
  })
it('verify Snapdocs logo image on Landing Page', () => {
    cy.get('img[title="Snapdocs"]').as('logoSelector')
    cy.checkSnapdocsLogo()
})
})
