import Suite = Mocha.Suite;

const allureReporter = require('@wdio/allure-reporter').default;

export function that(suite: Suite, title: string, testId: String,
                     testBody: () => void, issueId?: string) {
  it(`${suite.title} ${title}`, () => {
    if (testId) {
      allureReporter.addTestId(testId);
    }
    if (issueId) {
      allureReporter.addIssue(issueId);
    }
    allureReporter.addFeature(suite.title);
    testBody();
  });
}
