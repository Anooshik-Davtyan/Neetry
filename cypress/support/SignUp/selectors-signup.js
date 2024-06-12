class SelectorsSignup {
    SignUpNameField() {
        return cy.get('[data-qa="signup-name"]');
    }

    SignUpEmailField() {
        return cy.get('[data-qa="signup-email"]');
    }

    SignUpButton() {
        return cy.get('[data-qa="signup-button"]');
    }

    nameField() {
        return cy.get('#name');
    }

    emailField() {
        return cy.get('#email');
    }

    genderRadioButton(selector) {
        return cy.get(`#id_gender${selector}`);
    }

    passwordField() {
        return cy.get('#password');
    }

    birthDay() {
        return cy.get('#days');
    }

    birthMonth() {
        return cy.get('#months');
    }

    birthYear() {
        return cy.get('#years');
    }

    newsLetterCheckbox() {
        return cy.get('#newsletter');
    }

    optinCheckbox() {
        return cy.get('#optin');
    }

    addressInformationFirstName() {
        return cy.get('#first_name');
    }

    addressInformationLastName() {
        return cy.get('#last_name');
    }

    company() {
        return cy.get('#company');
    }

    firstAddress() {
        return cy.get('#address1');
    }

    county() {
        return cy.get('#country');
    }

    state() {
        return cy.get('#state');
    }

    city() {
        return cy.get('#city');
    }

    zipCode() {
        return cy.get('#zipcode');
    }

    mobileNumber() {
        return cy.get('#mobile_number');
    }

    createAccountButton() {
        return cy.get('[data-qa="create-account"]');
    }

    containerSelector() {
        return cy.get('#form').find('.container');
    }

    continueButton() {
        return cy.get('[data-qa="continue-button"]');
    }

    shopMenu() {
        return cy.get('.shop-menu.pull-right li');
    }
}

export default SelectorsSignup;
