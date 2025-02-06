class CartPage {

    cart_button = "//a[@class='action showcart']"
    total_price = "//span[@class ='price-wrapper']/span[@class='price']"
    check_out_button = '#top-cart-btn-checkout'

    goToCart(){
        cy.xpath(this.cart_button).scrollIntoView();
        cy.xpath(this.cart_button).click();
    }

    getTotalPrice(){
        cy.xpath(this.total_price).invoke('text').as('total')
    }

    clickOnCheckOutButton(){
        cy.get(this.check_out_button, { timeout: 50000 }).should('be.visible');
        cy.get(this.check_out_button).click();
    }

}

export default CartPage