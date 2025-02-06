class ShippingAddressPage{

    customer_email_field = '#customer-email'
    first_name_field = "input[name='firstname']"
    last_name_field = "input[name='lastname']"
    street_address_field = "input[name='street[0]']"
    city_field = "input[name='city']"
    state_drop_down = "select[name='region_id']"
    zip_code_field = "input[name='postcode']"
    phone_number_field = "input[name='telephone']"
    shipping_method_option_one = "input[value='tablerate_bestway']"
    next_button = "//button/span[text()='Next']"

    fillInShippingDetails(isLoggedIn,email,first_name, last_name){
        if(isLoggedIn === 'No'){
            cy.get(this.customer_email_field).type(email);
        }       
        cy.get(this.first_name_field).type(first_name);
        cy.get(this.last_name_field).type(last_name);
        cy.get(this.street_address_field).type('Main Street');
        cy.get(this.city_field).type('Dubai')
        cy.get(this.state_drop_down).select('Alabama')
        cy.get(this.zip_code_field).type('872891')
        cy.get(this.phone_number_field).type('872102810')
        cy.get(this.shipping_method_option_one).check()
        cy.xpath(this.next_button).click()    
    }
}

export default ShippingAddressPage