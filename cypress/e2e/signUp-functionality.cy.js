import SignUpFunctionality from "../support/SignUp/signup-helpers";
import { Constants } from "../support/Methods/constants";
import Validators from "../support/Methods/validators";
import SignInFunctionality from "../support/SignIn/signin-helpers";

describe('verify registration functionality', () => {
    const signUp = new SignUpFunctionality();
    const signIn = new SignInFunctionality();
    const validator = new Validators();
    const randomEmail = Constants.randomEmail();
    const randomEmail1 = Constants.randomEmail();
    const randomName = Constants.randName();
    const randomLastName = Constants.randLastName();
    const randomPassword = Constants.randStr();
    const randomString = Constants.randStr();

    beforeEach('verify registration functionality', () => {
        cy.visit('/login');
    });

    it('verify sign up functionality with valid data', () => {
        signUp.typeUserName(randomName);
        signUp.typeUserEmail(randomEmail);
        signUp.clickOnSignUpButton();
        validator.validateUrl('/signup');
        validator.validateUserName(randomName);
        validator.validateUserEmail(randomEmail);

        signUp.commonFeatures(
            randomPassword,
            Constants.USER.DAY,
            Constants.USER.MONTH,
            Constants.USER.YEAR,
            randomName,
            randomLastName,
            Constants.USER.COMPANY_NAME,
            Constants.USER.ADDRESS,
            Constants.USER.COUNTY,
            Constants.USER.STATE,
            Constants.USER.CITY,
            Constants.USER.ZIP,
            Constants.USER.MOBILE_NUMBER
        );

        validator.validateUrl('/account_created');
        validator.validateAccountCreatedText();
        signUp.clickOnContinueButton();
        validator.validateLoggedUserName(randomName);
    });

    it('verify sign up functionality with an already existing email', () => {
        signUp.typeUserName(randomName);
        signUp.typeUserEmail(randomEmail);
        signUp.clickOnSignUpButton();
        validator.validateErrorMessage('signup', Constants.MESSAGE[1]);
    });

    it('verify sign up functionality with invalid email', () => {
        signUp.typeUserName(randomName);
        signUp.typeUserEmail(Constants.USER.EMAIL.slice(0, 8));
        signUp.clickOnSignUpButton();
        validator.toShowValidationMessage('[data-qa="signup-email"]', Constants.MESSAGE[3]);
    });

    it('verify validation messages', () => {
        ['signup-name', 'signup-email'].forEach((field) => {
            signUp.clickOnSignUpButton();
            validator.toShowValidationMessage(`[data-qa="${field}"]`, Constants.MESSAGE[0]);
            signUp.fillFields(field, randomString, randomEmail1);
        });

        signUp.clickOnSignUpButton();

        ['password', 'first_name', 'last_name', 'address',
            'state', 'city', 'zipcode', 'mobile_number'].forEach((field) => {
            signUp.clickOnCreateAccountButton();
            validator.toShowValidationMessage(`[data-qa="${field}"]`, Constants.MESSAGE[0]);
            signUp.fillFields(field, randomString);
        });
    });

    it('verify user account deletion functionality', () => {
        signIn.login(randomEmail, randomPassword);
        signUp.deleteAccount();
        validator.validateUrl('/delete_account');
        validator.validateDeletedAccountMessage();
    });
});
