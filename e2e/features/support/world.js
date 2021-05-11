const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { setWorldConstructor, After } = require('cucumber');

function World() {
  this.driver = new webdriver.Builder()
    .forBrowser('chrome')
    // .setChromeOptions(new chrome.Options().addArguments("--no-sandbox",
    // "--headless", "--ignore-certificate-errors", "--window-size=2920,2080"))
    .build();
}

After(function() {
  console.log('Cucumber finished all features. Closing browser');
  const driver = this.driver;
  return driver.close();
});

setWorldConstructor(World);

