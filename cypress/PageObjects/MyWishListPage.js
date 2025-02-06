class MyWishListPage{

    add_all_to_cart_button = "button[title='Add All to Cart']"

    clickOnAddAllToCartButton(){
        cy.get(this.add_all_to_cart_button).click();
    }


}

export default MyWishListPage