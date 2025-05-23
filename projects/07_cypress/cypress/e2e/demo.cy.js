describe('Functions Get() and Contains()', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8082/demo.html');
    })

    it('Demo with get()', () => {
        cy.contains('h1', 'Demo text').should('be.visible')
        cy.contains('Demo text').should('be.visible')

        cy.get('h1').contains('Demo text').should('be.visible')
        cy.get('h1').should('be.visible')
        cy.get('.mb').should('be.visible')

        cy.get('h1').eq(1).should('contain', 'Demo text')
        cy.get('h1').eq(1).should('be.visible')

        // classes
        cy.get('p[class="some-class-a"]').should('be.visible')
        cy.get('p.some-class-a').should('be.visible')
        cy.get('.some-class-a').should('be.visible')
        cy.log('-----------------')
        cy.get('.some-class-b').should('be.visible')
        cy.get('.some-class-a.some-class-b').should('be.visible')


        // id
        cy.get('[id=some_id]').should('be.visible')
        cy.get('p[id=some_id]').should('be.visible')
        cy.get('#some_id').should('be.visible')

        //loop
        cy.log('\n*** LOOPING ****\n')
        cy.get('h1').each(($el, index) => {
            // $el.should('be.visible')
            cy.log(`${index + 1} ${$el.text()}`)
        });

        // hover
        cy.log('\n*** HOVER ****\n')

        // cy.get('.hover-button').click()

        cy.get('.hover-box')
            .trigger('mouseover', { force: true })
            .find('.hover-button')
            .click({ force: true });

        cy.get('.hidden-text').should('be.visible')
        cy.get('.hidden-text').should('contain', 'You clicked')

    });


    it('Combinator selectors', () => {
        cy.log("***");
        cy.log("*** COMBINATOR SELECTORS ***");

        cy.log("*** Child selector '>' ***");

        cy.get('[data-qa="comb_slc"]');
        cy.get('[data-qa="comb_slc"] p');
        cy.get('[data-qa="comb_slc"] > p');

        cy.get('[data-qa="comb_slc"] > p').each(($el, index) => {
            cy.log(`Paragraph ${index + 1} | ${$el.text().trim()}`)
            cy.wrap($el).should('be.visible')
        });

        cy.log("***");
        cy.log("*** Descendant Selector (Space ) ***");
        cy.get('[data-qa="comb_slc"] p');

        cy.get('[data-qa="comb_slc"] p').each(($el, index) => {
            cy.log(`Paragraph ${index + 1} | ${$el.text().trim()}`)
            cy.wrap($el).should('be.visible')
        });

        cy.log("***");
        cy.log("*** Sibling Selector (+) ***");
        cy.get('[data-qa="sib_slc"] + p');
        cy.get('[data-qa="sib_slc"] + + p');

        cy.log("***");
        cy.log("*** General Sibling Selector (~) ***");
        cy.get('[data-qa="sib_slc"] ~ p');

        cy.log("***");
        cy.log("*** Combining Multiple Combinators ***");
        cy.get('#comb_slc_comb > ul > li + li');

        cy.get('#comb_slc_comb > ul > li');
        cy.get('#comb_slc_comb > ul > li').eq(1);
    });

    it('', () => { });
    it('', () => { });
    it('', () => { });

});