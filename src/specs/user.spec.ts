import { that } from '../helpers/that';
import { given, then, when } from '../helpers/steps';
import { expect } from 'chai';
import { LoginPage } from '../pages/loginPage';
import { getPage } from '../helpers/testContext';

describe('User', function () {
  that(this, 'should see error message when login with incorrect account', 'C00001', () => {
    given('I start login page', () => {
      getPage(LoginPage);
    });

    when('I login with correct username and password', () => {
      getPage(LoginPage).login('testaccount', '12345678');
    });

    then('I should see error message',  () => {
      const ele = getPage(LoginPage).validationMessage('Invalid Username or Password');
      expect(getPage(LoginPage).waitUntilExist(ele),
             'The invalid account error message is not exist').to.be.true;
    });
  });
});
