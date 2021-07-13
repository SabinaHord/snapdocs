
describe('Notary Signing Agents test suite', () => {
beforeEach('open Notary Signing Agents Page', () => {
    cy.visit('/notary-public/')
})
it('verify there are no broken links on Notary Signing Agents page', () => {
    cy.checkBrokenLinks()
})
it('verify suggested locations', () => {
    const locations = ['New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Phoenix, AZ', 'Philadelphia, PA', 'Houston, TX']
    cy.get ('.suggested-locations').find('tbody td').each((location, index) => {
        cy.wrap(location).should('contain', locations[index])
    })
})
it('verify Snapdocs logo image on Notary Signing Agents Page', () => {
    cy.get('.logo-image').as('logoSelector')
    cy.checkSnapdocsLogo()
})
it('find a Notary Agent', () => {
    const zip = 94110
    const text = "Find a Notary Public"
    const resultsNumber = 10
    cy.get('input[type="text"]').type(zip).type('{enter}')
    cy.get('h1').should('contain', text)
    cy.get('.table [class="notary-info"]').should('have.length', resultsNumber)
})
it('check Notary Agent profile', () => {
    const zip = 94110
    cy.get('input[type="text"]').type(zip).type('{enter}')
    cy.get('.notary-info').eq(0).find('a').and('have.attr', 'href').then((href) => {
        cy.visit('https://www.snapdocs.com/' + href)
        cy.get('[type="submit"]').should('contain', 'Get Contact Info')
        })
 })
})

