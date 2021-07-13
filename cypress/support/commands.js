
Cypress.Commands.add('checkSnapdocsLogo', () => {
    const h = 31
    const w = 200
    cy.get('@logoSelector').invoke('height').should('eq', h)
    cy.get('@logoSelector').invoke('width').should('eq', w)
})
Cypress.Commands.add('checkBrokenLinks', () => {
    cy.get('a').each($a => {
        const message = $a.text();
        expect($a, message).to.have.attr("href").not.contain("undefined");
      })
})
Cypress.Commands.add('checkHeaderLinks', () => {
    const links = ['Lenders', 'Title / Escrow', 'Notary Signing Agents', 'Resource Center', 'COVID-19 Guide', 'Sign In', 'Get Started']
    cy.get ('@itemSelectorList').should('have.length', links.length)
    cy.get ('@itemSelector').find('li a').each((item, index) => {
    cy.wrap(item).should('contain', links[index])
  })
})