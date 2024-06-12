export class Constants {
    static USER = {
        NAME: 'Ann',
        COUNTY: 'United States',
        EMAIL: '7237wmm16sb@gmail.com',
        PASSWORD: 'user123456',
        COMPANY_NAME: 'Neetry',
        ADDRESS:'Los Angeles, CA 90001',
        MOBILE_NUMBER: '(000) 000-0000',
        STREET_NUMBER: '45',
        STREET: 'Pickedly',
        STATE: 'CA',
        CITY: 'Los Angeles',
        ZIP: '90001',
        DAY: '25',
        MONTH: 'March',
        YEAR: '2000',
    };

    static MESSAGE = [
        'Please fill out this field.',
        'Email Address already exist!',
        'Your email or password is incorrect!',
        'Please include an \'@\' in the email address. \'7237wmm1\' is missing an \'@\'.'
    ];


    static RANDOM_NAMES = ['Ann', 'Sara', 'John', 'Hannah','Jack','Lara','Lea','Jane'];


    static RANDOM_LAST_NAMES = ['James', 'Parker', 'Smith', 'Brown','Johnson','Williams','Miller','Davis'];


    static randName() {
        return Constants.RANDOM_NAMES[Constants.rand(0, Constants.RANDOM_NAMES.length - 1)];
    }


    static randLastName() {
        return Constants.RANDOM_LAST_NAMES[Constants.rand(0, Constants.RANDOM_LAST_NAMES.length - 1)];
    }


    static rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    static randomEmail() {
        const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        let string = '';
        for (let e = 0; e < 10; e++) {
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        return string + '@gmail.com';
    }


    static randStr() {
        return Math.random().toString(36).substr(2, 10);
    }
}