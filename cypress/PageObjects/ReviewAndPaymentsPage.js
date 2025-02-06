class ReviewAndPaymentsPage {

place_order_button = "//button[@title='Place Order']"
order_success_message = "h1[class = 'page-title'] > span"

clickPlaceOrderButtonAndValidateSuccessMessage(){
    cy.xpath(this.place_order_button).click()
    cy.get(this.order_success_message).should('have.text','Thank you for your purchase!');
}

}

export default ReviewAndPaymentsPage