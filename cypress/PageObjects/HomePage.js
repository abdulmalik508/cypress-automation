class HomePage {

    profile_arrow_button = ':nth-child(2) > .customer-welcome > .customer-name > .action'
    sign_out_button = "(//a[normalize-space()='Sign Out'])[1]"
    sign_in_button = "(//a[normalize-space()='Sign In'])[1]"
    women_section = "//span[text()='Women']"
    men_section = "//span[text()='Men']"
    tops_section = "(//a[@id='ui-id-9']/span[text()='Tops'])"
    men_jackets = '#ui-id-19'
    search_input_field = '#search'
    search_results = "ol[class='products list items product-items']"
    page_title = "h1[class = 'page-title'] > span"
    total_item_count = "(//p[@class='toolbar-amount']/span)[1]"

    signOutTheUser(){
        cy.get(this.profile_arrow_button).click();
        cy.xpath(this.sign_out_button).click();
        cy.contains('You are signed out');
    }

    clickOnTheSignInButton(){
        cy.xpath(this.sign_in_button).click();
    }

    goToWomenJacketSection(){
        cy.xpath(this.women_section).trigger('mouseover');
        cy.xpath(this.tops_section).trigger('mouseover');
        cy.contains('Jackets').click({ force: true })
    }
    goToMenJacketSection(){
        cy.xpath(this.men_section).scrollIntoView();
        cy.xpath(this.men_section).trigger('mouseover');
        cy.get(this.men_jackets).click({ force: true })
    
    }

    searchAndValidateResults(){
        cy.get(this.search_input_field).type("hoodies for men")
        cy.get(this.search_input_field).type("{enter}")
        cy.get(this.page_title).should('have.text',"Search results for: 'hoodies for men'");
        cy.xpath(this.total_item_count).invoke('text').as('items')
        cy.get('@items').then((items) =>{
            cy.get(this.search_results).find('li').its('length').should('eq', parseInt(items))
          })
    }
}

export default HomePage