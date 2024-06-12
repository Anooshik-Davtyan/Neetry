import SignUpFunctionality from "../support/SignUp/signup-helpers";
import { Constants } from "../support/Methods/constants";
import Validators from "../support/Methods/validators";
import SignInFunctionality from "../support/SignIn/signin-helpers";

describe('Mobile Responsiveness Testing for Registration Functionality', () => {
    const signUp = new SignUpFunctionality();
    const signIn = new SignInFunctionality();
    const validator = new Validators();
    const randomEmail = Constants.randomEmail();
    const randomEmail1 = Constants.randomEmail();
    const randomName = Constants.randName();
    const randomLastName = Constants.randLastName();
    const randomPassword = Constants.randStr();
    const randomString = Constants.randStr();

    const viewports = [
        { device: 'iPhone 11', width: 414, height: 896 },
        { device: 'iPhone 11 Pro', width: 375, height: 812 },
        { device: 'Samsung Galaxy S20', width: 360, height: 800 },
        { device: 'Samsung Galaxy S20 Ultra', width: 384, height: 854 },
        { device: 'Google Pixel 4', width: 411, height: 731 },
        { device: 'Google Pixel 4 XL', width: 411, height: 823 },
        { device: 'OnePlus 9', width: 412, height: 870 },
        { device: 'OnePlus 9 Pro', width: 412, height: 888 },
        { device: 'iPad Air (4th generation)', width: 820, height: 1180 },
        { device: 'iPad Mini (6th generation)', width: 748, height: 1024 },
    ];

    viewports.forEach(viewport => {
        context(`Testing on ${viewport.device}`, () => {
            beforeEach('verify registration functionality', () => {
                cy.viewport(viewport.width, viewport.height);
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
    });
});
