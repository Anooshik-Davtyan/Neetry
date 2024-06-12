import SignInFunctionality from "../support/SignIn/signin-helpers";
import { Constants } from "../support/Methods/constants";
import Validators from "../support/Methods/validators";
import SignUpFunctionality from "../support/SignUp/signup-helpers";

describe('Mobile Responsiveness Testing for Sign In Functionality', () => {
    const signUp = new SignUpFunctionality();
    const signIn = new SignInFunctionality();
    const validator = new Validators();
    const randomEmail = Constants.randomEmail();
    const randomString = Constants.randStr();

    const viewports =  [
        { device: 'iPhone 12 Pro', width: 390, height: 844 },
        { device: 'iPhone 12 Pro Max', width: 428, height: 926 },
        { device: 'iPhone 13 Pro', width: 390, height: 844 },
        { device: 'iPhone 13 Pro Max', width: 428, height: 926 },
        { device: 'iPhone 14 Pro', width: 393, height: 852 },
        { device: 'iPhone 14 Pro Max', width: 430, height: 932 },
        { device: 'iPad Pro 11', width: 834, height: 1194 },
        { device: 'iPad Pro 12.9', width: 1024, height: 1366 },
        { device: 'Samsung Galaxy S21', width: 360, height: 800 },
        { device: 'Samsung Galaxy S21 Ultra', width: 384, height: 854 },
        { device: 'Google Pixel 5', width: 393, height: 851 },
        { device: 'Google Pixel 6', width: 412, height: 915 },
        { device: 'Google Pixel 7 Pro', width: 412, height: 960 }
    ];

    viewports.forEach(viewport => {
        context(`Testing on ${viewport.device}`, () => {
            beforeEach('verify sign In functionality', () => {
                cy.viewport(viewport.width, viewport.height);
                cy.visit('/login');
            });

            it('verify sign In functionality with valid data', () => {
                signIn.fillEmailAddress(Constants.USER.EMAIL);
                signIn.fillPassword(Constants.USER.PASSWORD);
                signIn.clickOnLoginButton();
                validator.validateLoggedUserName(Constants.USER.NAME);
                signIn.logout();
                validator.validateUrl('/login');
            });

            it('verify sign In functionality with invalid email', () => {
                signIn.fillEmailAddress(Constants.USER.EMAIL.slice(0, 8));
                signIn.fillPassword(Constants.USER.PASSWORD);
                signIn.clickOnLoginButton();
                validator.toShowValidationMessage('[data-qa="login-email"]', Constants.MESSAGE[3]);
            });

            it('verify sign In functionality with invalid password', () => {
                signIn.fillEmailAddress(Constants.USER.EMAIL);
                signIn.fillPassword(Constants.USER.PASSWORD.slice(0, 2));
                signIn.clickOnLoginButton();
                validator.validateErrorMessage('login', Constants.MESSAGE[2]);
            });

            it('verify validation messages', () => {
                ['login-email', 'login-password'].forEach((field) => {
                    signIn.clickOnLoginButton();
                    validator.toShowValidationMessage(`[data-qa="${field}"]`, Constants.MESSAGE[0]);
                    signUp.fillFields(field, randomString, randomEmail);
                });
            });

            it('verify user logout', () => {
                signIn.login(Constants.USER.EMAIL, Constants.USER.PASSWORD);
                signIn.logout();
                validator.validateUrl('/login');
            });
        });
    });
});
