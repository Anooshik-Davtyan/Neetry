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
        select.SignUpNameField().type(name);
    }

    typeUserEmail(email) {
        select.SignUpEmailField().type(email);
    }

    clickOnSignUpButton() {
        select.SignUpButton().click();
    }

    clickOnRadioButton(index) {
        select.genderRadioButton(index).click();
    }

    typeUserPassword(password) {
        select.passwordField().clear().type(password);
    }

    fillDate(day, month, year) {
        select.birthDay().select(day);
        select.birthMonth().select(month);
        select.birthYear().select(year);
    }

    clickOnNewsLetterCheckbox() {
        select.newsLetterCheckbox().click();
    }

    clickOnOptinCheckbox() {
        select.optinCheckbox().click();
    }

    fillAddressInformationFirstName(name) {
        select.addressInformationFirstName().clear().type(name);
    }

    fillAddressInformationLastName(name) {
        select.addressInformationLastName().clear().type(name);
    }

    typeCompanyName(companyName) {
        select.company().clear().type(companyName);
    }

    fillFirstAddress(address) {
        select.firstAddress().clear().type(address);
    }

    selectCounty(county) {
        select.county().select(county);
    }

    fillState(state) {
        select.state().clear().type(state);
    }

    fillZipCode(zip) {
        select.zipCode().clear().type(zip);
    }

    fillCity(city) {
        select.city().clear().type(city);
    }

    fillMobileNumber(number) {
        select.mobileNumber().clear().type(number);
    }

    clickOnCreateAccountButton() {
        select.createAccountButton().click();
    }

    clickOnContinueButton() {
        select.continueButton().click();
    }

    deleteAccount() {
        select.shopMenu().contains('Delete Account').click();
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
