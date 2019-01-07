import { that } from '../helpers/that';
import { given, then, when } from '../helpers/steps';
import { expect } from 'chai';
import { LoginPage } from '../pages/loginPage';
import { getPage } from '../helpers/testContext';

describe('Demo', function () {
  that(this, 'should pass', 'DEMO0001', () => {
    given('I start login page again', () => {
      getPage(LoginPage);
    });

    when('I login with correct username and password', () => {
      getPage(LoginPage).login('testaccount', '12345678');
    });

    then('I should see error message',  () => {
      const loginPage = getPage(LoginPage);
      expect(loginPage.waitUntilDisplayed(
                loginPage.validationMessage('Invalid Username or Password')),
             'The invalid account error message is not displayed').to.be.true;
    });
  });

  that(this, 'should failed', 'DEMO0002', () => {
    given('I start login page', () => {
      getPage(LoginPage);
    });

    when('I login with correct username and password', () => {
      getPage(LoginPage).login('testaccount', '12345678');
    });

    then('I should see error message',  () => {
      const loginPage = getPage(LoginPage);
      expect(loginPage.waitUntilDisplayed(
                loginPage.validationMessage('Non exist item')),
             'The invalid account error message is not displayed').to.be.true;
    });
  });
});
