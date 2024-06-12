class SelectorsSignIn {
    loginEmailAddressField() {
        return cy.get('[data-qa="login-email"]');
    }

    loginPasswordField() {
        return cy.get('[data-qa="login-password"]');
    }

    loginButton() {
        return cy.get('[data-qa="login-button"]');
    }
}

export default SelectorsSignIn;
