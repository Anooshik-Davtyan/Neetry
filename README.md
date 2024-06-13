## Code Structure

```
root
├── cypress/
│   ├── e2e/
|   |   ├── signIn-functionality.cy.js
│   │   ├── signUp-functionality.cy.js
|   ├── support/
|   |   ├── Methods
|   |   |   ├── constants.js
|   |   |   ├── validators.js
|   |   ├── SignIn  
|   |   |   ├── selectors-signin.js
|   |   |   ├── signin-helpers.js
|   |   ├── SignUp
|   |   |   ├── selectors-signup.js
|   |   |   ├── signup-helpers.js
|   |   ├── commands.js
|   |   ├── e2e.js
├── node_modules/
├── .gitignore
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```
- `cypress/`: This directory contains the Cypress test files
    - `e2e/`: Contains test files
        - `signIn-functionality.cy.js/`: Contains test suite as focusing on Mobile Responsiveness Testing along with Sign-In Functionality across different devices
        - `signUp-functionality.cy.js/`: Contains test suite as focusing on Mobile Responsiveness Testing along with Sign-Up Functionality across different devices
    - `support/`: Contains all config files
        - `Methods`/: Contains test data and validation functions
            - `constants.js`/: Contains test data
            - `validators.js`/: Contains validation functions
        - `SignIn`/: Contains selectors and functions for sign in functionality
            - `selectors-signin.js`/: Contains selectors for tests on sign in
            - `signin-helpers.js`/: Contains functions for tests on sign in
        - `SignUp`/: Contains selectors and functions for sign up functionality
            - `selectors-signup.js`/: Contains selectors for tests on sign up
            - `signup-helpers.js`/: Contains functions for tests on sign up
- `node_modules/`: The npm packages and dependencies required for the project
- `cypress.config.js`: Cypress configuration file
- `.gitignore`: Contains files and directories that should not be committed
- `package.json`: The npm package file containing project dependencies and scripts

## How to Run

1. **Clone the repository**
```
git clone https://github.com/Anooshik-Davtyan/Neetry.git
cd Neetry
```
2. **Open Cypress**
```
npx cypress open
```

3. **Run a desired test file only by clicking on it**
