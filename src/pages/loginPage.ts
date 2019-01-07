import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  get usernameInput(): WebdriverIO.Element<void> {
    return $('#UserName');
  }
  get passwordInput(): WebdriverIO.Element<void> {
    return $('#Password');
  }
  get loginBtn(): WebdriverIO.Element<void> {
    return $('button[type="submit"]');
  }

  validationMessage(message:string): WebdriverIO.Element<void> {
    return $(`.validationMessage=${message}`);
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
