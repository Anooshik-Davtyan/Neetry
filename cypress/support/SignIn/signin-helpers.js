import SelectorsSignIn from "./selectors-signin";
import SelectorsSignup from "../SignUp/selectors-signup";

const select = new SelectorsSignIn();
const selector = new SelectorsSignup();

class SignInFunctionality {
    fillEmailAddress(email) {
        select.loginEmailAddressField().clear().type(email);
    }

    fillPassword(password) {
        select.loginPasswordField().clear().type(password);
    }

    clickOnLoginButton() {
        select.loginButton().click();
    }

    logout() {
        selector.shopMenu().contains('Logout').click();
    }

    login(email, password) {
        this.fillEmailAddress(email);
        this.fillPassword(password);
        this.clickOnLoginButton();
    }
}

export default SignInFunctionality;
