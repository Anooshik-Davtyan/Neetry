import SelectorsSignup from "./selectors-signup";

const select = new SelectorsSignup();

class signUpFunctionality {
    commonFeatures = (password, day, month, year, firstName, lastName, companyName, address, county, state, city, zip, mobileNumber) => {
        this.clickOnRadioButton(1);
        this.typeUserPassword(password);
        this.fillDate(day, month, year);
        this.clickOnNewsLetterCheckbox();
        this.clickOnOptinCheckbox();
        this.fillAddressInformationFirstName(firstName);
        this.fillAddressInformationLastName(lastName);
        this.typeCompanyName(companyName);
        this.fillFirstAddress(address);
        this.selectCounty(county);
        this.fillState(state);
        this.fillCity(city);
        this.fillZipCode(zip);
        this.fillMobileNumber(mobileNumber);
        this.clickOnCreateAccountButton();
    };

    typeUserName(name) {
        select.SignUpNameField().should('be.visible').type(name);
    }

    typeUserEmail(email) {
        select.SignUpEmailField().should('be.visible').type(email);
    }

    clickOnSignUpButton() {
        select.SignUpButton().should('be.visible').click();
    }

    clickOnRadioButton(index) {
        select.genderRadioButton(index).should('be.visible').click();
    }

    typeUserPassword(password) {
        select.passwordField().should('be.visible').clear().type(password);
    }

    fillDate(day, month, year) {
        select.birthDay().select(day);
        select.birthMonth().select(month);
        select.birthYear().select(year);
    }

    clickOnNewsLetterCheckbox() {
        select.newsLetterCheckbox().should('be.visible').click();
    }

    clickOnOptinCheckbox() {
        select.optinCheckbox().should('be.visible').click();
    }

    fillAddressInformationFirstName(name) {
        select.addressInformationFirstName().should('be.visible').clear().type(name);
    }

    fillAddressInformationLastName(name) {
        select.addressInformationLastName().should('be.visible').clear().type(name);
    }

    typeCompanyName(companyName) {
        select.company().should('be.visible').clear().type(companyName);
    }

    fillFirstAddress(address) {
        select.firstAddress().should('be.visible').clear().type(address);
    }

    selectCounty(county) {
        select.county().select(county);
    }

    fillState(state) {
        select.state().should('be.visible').clear().type(state);
    }

    fillZipCode(zip) {
        select.zipCode().should('be.visible').clear().type(zip);
    }

    fillCity(city) {
        select.city().should('be.visible').clear().type(city);
    }

    fillMobileNumber(number) {
        select.mobileNumber().should('be.visible').clear().type(number);
    }

    clickOnCreateAccountButton() {
        select.createAccountButton().should('be.visible').click();
    }

    clickOnContinueButton() {
        select.continueButton().should('be.visible').click();
    }

    deleteAccount() {
        select.shopMenu().should('be.visible').contains('Delete Account').click();
    }

    fillFields(selector, randText, randomEmail) {
        if (selector.includes('email')) {
            cy.get(`[data-qa=${selector}]`).clear().type(randomEmail);
        } else {
            cy.get(`[data-qa=${selector}]`).clear().type(randText);
        }
    }
}

export default signUpFunctionality;
