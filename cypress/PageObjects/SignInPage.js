class SignInPage {


    email_field = '#email'
    password_field = "#pass"
    sign_in_button = '#send2'

    signInToTheWebSite(email, password){
        cy.get(this.email_field).type(email);
        cy.get(this.password_field).type(password),{log:false}
        cy.get(this.sign_in_button).click();
    }

    validateSignInIsSuccessful(first_name, last_name){
        cy.contains('Welcome, '+first_name+' '+last_name+'!');
    }
}

export default SignInPage