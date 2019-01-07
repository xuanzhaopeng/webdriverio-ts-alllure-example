const allureReporter = require('@wdio/allure-reporter').default;

export function given(title: string, givenBody: () => void) {
  allureReporter.addStep(`Given ${title}`);
  givenBody();
}

export function when(title: string, whenBody: () => void) {
  allureReporter.addStep(`When ${title}`);
  whenBody();
}

export function then(title: string, thenBody: () => void) {
  allureReporter.addStep(`Then ${title}`);
  thenBody();
}
