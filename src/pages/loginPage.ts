import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  get usernameInput() {
    return browser.$('#UserName');
  }
  get passwordInput() {
    return browser.$('#Password');
  }
  get loginBtn() {
    return browser.$('button[type="submit"]');
  }

  validationMessage(message:string) {
    return browser.$(`.validationMessage=${message}`);
  }

  constructor() {
    super();
    browser.url(browser.options.baseUrl);
  }

  login(username: string, password: string) {
    this.usernameInput.addValue(username);
    this.passwordInput.addValue(password);
    this.loginBtn.click();
  }
}
