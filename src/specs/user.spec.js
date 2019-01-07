"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const that_1 = require("../helpers/that");
const steps_1 = require("../helpers/steps");
const chai_1 = require("chai");
const loginPage_1 = require("../pages/loginPage");
const testContext_1 = require("../helpers/testContext");
describe('User', function () {
    that_1.that(this, 'should see error message when login with incorrect account', 'C00001', () => {
        steps_1.given('I start login page', () => {
            testContext_1.getPage(loginPage_1.LoginPage);
        });
        steps_1.when('I login with correct username and password', () => {
            testContext_1.getPage(loginPage_1.LoginPage).login('testaccount', '12345678');
        });
        steps_1.then('I should see error message', () => {
            const ele = testContext_1.getPage(loginPage_1.LoginPage).validationMessage('Invalid Username or Password');
            chai_1.expect(testContext_1.getPage(loginPage_1.LoginPage).waitUntilExist(ele), 'The invalid account error message is not exist').to.be.true;
        });
    });
});
