
class RegistrationPage 
{
    create_an_account_header_button = "(//a[text()='Create an Account'])[1]"
    create_an_account_title = 'h1 span'
    first_name_field = '#firstname'
    last_name_field= '#lastname'
    email_address_field = '#email_address'
    password_field ='#password'
    confirm_password_field = '#password-confirmation'
    create_an_account_button = "button[title='Create an Account']"
    confirmation_message_text = "div[role='alert'] div div"
   
    goToCreateAnAccountPage(){
        cy.xpath(this.create_an_account_header_button).click();
    }

    fillUpTheForm(firstName,lastName,email,password){
        cy.get(this.first_name_field).type(firstName);
        cy.get(this.last_name_field).type(lastName);
        cy.get(this.email_address_field).type(email);
        cy.get(this.password_field).type(password),{log:false};
        cy.get(this.confirm_password_field).type(password),{log:false};
        cy.get(this.create_an_account_button).click();
    }

    validateAccountCreationSuccessMessage(){
        cy.get(this.confirmation_message_text).should('have.text','Thank you for registering with Main Website Store.');
    }
}

export default RegistrationPage