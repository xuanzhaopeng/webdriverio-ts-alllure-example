export class BasePage {
  constructor() {
  }

  waitUntilExist(element: WebdriverIO.Element<void>, timeoutInMs = 10000) {
    return this.sandbox(() => element.waitForExist(timeoutInMs));
  }

  waitUntilDisplayed(element: WebdriverIO.Element<void>, timeoutInMs = 10000) {
    return this.sandbox(() => element.waitForDisplayed(timeoutInMs));
  }

  waitUntilEnabled(element: WebdriverIO.Element<void>, timeoutInMs = 10000) {
    return this.sandbox(() => element.waitForEnabled(timeoutInMs));
  }

  private sandbox(fn: () => void):boolean {
    try {
      fn();
      return true;
    } catch (e) {
      return false;
    }
  }
}
