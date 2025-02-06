import RegistrationPage from "../pageObjects/registrationPage"
import HomePage from "../PageObjects/HomePage"
import SignInPage from "../PageObjects/SignInPage"
import JacketsPage from "../PageObjects/JacketsPage"
import CartPage from "../PageObjects/CartPage"
import ShippingAddressPage from "../PageObjects/ShippingAddressPage"
import ReviewAndPaymentsPage from "../PageObjects/ReviewAndPaymentsPage"
import MyWishListPage from "../PageObjects/MyWishListPage"

const registrationPage = new RegistrationPage()
const homePage = new HomePage()
const signInPage = new SignInPage()
const jacketsPage = new JacketsPage()
const cartPage = new CartPage()
const shippingAddressPage = new ShippingAddressPage()
const reviewAndPaymentsPage = new ReviewAndPaymentsPage()
const myWishListPage = new MyWishListPage()

describe('Test Cases for Magento Website', function() {

  const first_name = Math.random().toString(36).substring(2,7);
  const last_name = Math.random().toString(36).substring(2,7);
  const email = Math.random().toString(36).substring(2,7).concat('@yopmail.com');
  
  it('Test Case A - Registration Flow with login validation', function() {
    cy.visit('https://magento.softwaretestingboard.com/')
    registrationPage.goToCreateAnAccountPage()
    registrationPage.fillUpTheForm(first_name,last_name,email,Cypress.env('password'))
    registrationPage.validateAccountCreationSuccessMessage()
    homePage.signOutTheUser()
    homePage.clickOnTheSignInButton()
    signInPage.signInToTheWebSite(email,Cypress.env('password'))
    signInPage.validateSignInIsSuccessful(first_name, last_name)
  })

  it('Test Case B - Place Order with Multiple products', function() {
    let price_one 
    let price_two
    let price_final
    cy.visit('https://magento.softwaretestingboard.com/')
    homePage.goToWomenJacketSection();
    jacketsPage.clickOnTheProduct();
    jacketsPage.getProductPrice();
    cy.get('@price').then((first_price) => {
      price_one = first_price.replace('$', '')
    })
    jacketsPage.addProductToCart();
    homePage.goToMenJacketSection();
    jacketsPage.clickOnTheProduct();
    jacketsPage.getProductPrice();
    cy.get('@price').then((second_price) => {
      price_two= second_price.replace('$', '')
    })
   
    jacketsPage.addProductToCart();
    cartPage.goToCart()
    cartPage.getTotalPrice()
    cy.get('@total').then((final_price) =>{
      price_final = final_price.replace('$', '')
    })

    cy.then(function(){
      let sum =parseFloat(price_one) + parseFloat(price_two)
      expect(parseFloat(sum).toFixed(2)).to.equal(parseFloat(price_final).toFixed(2))
    })

    cartPage.clickOnCheckOutButton()
    shippingAddressPage.fillInShippingDetails('No',email,first_name,last_name)
    reviewAndPaymentsPage.clickPlaceOrderButtonAndValidateSuccessMessage()
  })

  it('Test Case C - Add Products in Wishlist and Checkout from wishlist', function() {
    cy.visit('https://magento.softwaretestingboard.com/')
    homePage.clickOnTheSignInButton()
    signInPage.signInToTheWebSite(email,Cypress.env('password'))
    homePage.goToWomenJacketSection();
    jacketsPage.clickOnTheProduct();
    jacketsPage.selectSizeAndColor();
    jacketsPage.clickOnAddToWishListButton()
    myWishListPage.clickOnAddAllToCartButton()
    cartPage.goToCart()
    cartPage.clickOnCheckOutButton()
    shippingAddressPage.fillInShippingDetails('Yes',email,first_name,last_name)
    reviewAndPaymentsPage.clickPlaceOrderButtonAndValidateSuccessMessage()
  })

  it('Test Case D - Search and validate results ', function() {
    cy.visit('https://magento.softwaretestingboard.com/')
    homePage.searchAndValidateResults()
  })
})