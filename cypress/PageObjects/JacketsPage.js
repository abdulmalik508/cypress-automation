class JacketsPage{

    first_product = "(//img[@class='product-image-photo'])[1]"
    small_size = "(//div[text()='S'])[1]"
    color_blue = '#option-label-color-93-item-50'
    product_price = "//div[@class='product-info-main']//span[@class='price']"
    add_to_cart_button = '#product-addtocart-button'
    success_message ='.message-success > div'
    wish_list_button = "div[class='product-social-links'] > div > a[class='action towishlist']"

    clickOnTheProduct(){
        cy.xpath(this.first_product).click();
    }

    getProductPrice(){
        cy.xpath(this.product_price).invoke('text').as('price')
    }

    addProductToCart(){
        this.selectSizeAndColor()
        cy.get(this.add_to_cart_button).click();
        cy.get(this.success_message);
    }

    selectSizeAndColor(){
        cy.xpath(this.small_size).click();
        cy.get(this.color_blue).click();
    }

    clickOnAddToWishListButton(){
        cy.get(this.wish_list_button).click()
        cy.get(this.success_message);
    }

}

export default JacketsPage