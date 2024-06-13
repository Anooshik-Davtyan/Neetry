import SelectorsSignIn from "./selectors-signin";
import SelectorsSignup from "../SignUp/selectors-signup";

const select = new SelectorsSignIn();
const selector = new SelectorsSignup();

class SignInFunctionality {
    fillEmailAddress(email) {
        select.loginEmailAddressField().should('be.visible').clear().type(email);
    }

    fillPassword(password) {
        select.loginPasswordField().should('be.visible').clear().type(password);
    }

    clickOnLoginButton() {
        select.loginButton().should('be.visible').click();
    }

    logout() {
        selector.shopMenu().should('be.visible').contains('Logout').click();
    }

    login(email, password) {
        this.fillEmailAddress(email);
        this.fillPassword(password);
        this.clickOnLoginButton();
    }
}

export default SignInFunctionality;
