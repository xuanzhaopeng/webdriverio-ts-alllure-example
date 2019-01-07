const allureReporter = require('@wdio/allure-reporter').default;

export function given(title: string, givenBody: () => void) {
  allureReporter.addStep(`Given ${title}`);
  run(title, () => givenBody());
}

export function when(title: string, whenBody: () => void) {
  allureReporter.addStep(`When ${title}`);
  run(title, () => whenBody());
}

export function then(title: string, thenBody: () => void) {
  allureReporter.addStep(`Then ${title}`);
  run(title, () => thenBody());
}

function run(title: string, fn: () => void) {
  try {
    fn();
  } catch (e) {
    const errImgBuffer:any =  browser.takeScreenshot();
    allureReporter.addAttachment(title, new Buffer(errImgBuffer, 'base64'), 'image/png');
    throw e;
  }
}
