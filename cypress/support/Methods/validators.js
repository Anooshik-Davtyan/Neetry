import SelectorsSignup from "../SignUp/selectors-signup";

const select = new SelectorsSignup();

class Validators {
    validateUrl(url) {
        cy.url().should('contain', url);
    }

    validateUserName(name) {
        select.nameField().should('have.value', name);
    }

    validateUserEmail(email) {
        select.emailField().should('have.value', email);
    }

    validateAccountCreatedText() {
        select.containerSelector()
            .should('contain', 'Account Created!')
            .should('contain', 'Congratulations! Your new account has been successfully created!');
    }

    validateLoggedUserName(name) {
        select.shopMenu().last().should('contain', ' Logged in as ' + name);
    }

    validateDeletedAccountMessage() {
        select.containerSelector()
            .should('contain', 'Account Deleted!')
            .should('contain', 'Your account has been permanently deleted!');
    }

    toShowValidationMessage(field, arg) {
        cy.get(field).then(($input) => {
            expect($input[0].validationMessage).to.eq(arg);
        });
    }

    validateErrorMessage(selector, errorMessage) {
        cy.get(`.${selector}-form`).find('p').should('contain', errorMessage);
    }
}

export default Validators;
