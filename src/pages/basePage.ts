export class BasePage {
  constructor() {
    console.log('Base page constructor');
  }

  waitUntilExist(element:
              WebdriverIO.Client<WebdriverIO.RawResult<WebdriverIO.Element>>
              & WebdriverIO.RawResult<WebdriverIO.Element>) {
    try {
      element.waitForExist();
      return true;
    } catch (e) {
      return false;
    }
  }
}
