const { expect, assert } = require('chai');
const { Given, setDefaultTimeout, Then, When } = require('cucumber');
const { By, until, Key } = require('selenium-webdriver');
const {
  elementTestIds,
  filePaths,
  textInputs,
  textMarkers,
  urls,
  users,
} = require('../constants');
const {
  getButtonElementByContent,
  getByTestId,
  getElementByContent,
  getElementByExactMatch,
  getFollowingSiblingElement,
  getInputElementByPlaceholder,
  getTextareaElementByPlaceholder,
  selectByVisibleText,
} = require('../support/DomUtils');
const cwd = process.cwd();

let testUser = {
  email: undefined,
  password: undefined,
};

const delayConstant = 1;
const maxTimeout = (60 * 1000) * delayConstant;
const defaultSleep = (1* 1000) * delayConstant;
const sendKeysSleep = 100;

const MAX_RETRIES = 20;

const references = {};

setDefaultTimeout(maxTimeout);

Then('pause for {int}', async function (value) {
  await this.driver.sleep(value);
});

Given('I open {string}', async function (url) {
  // open website url
  await this.driver.get(url);
});

Then('header should have {string}', async function (expectedHeader) {
  // assert header has this string
  const header = await this.driver.findElement(By.xpath('//h1'))
  const actualHeader = await header.getText();
  assert.equal(actualHeader, expectedHeader);
});

Then('header should contain {string}', async function (expectedHeader) {
  // assert header has this string
  const header = await this.driver.findElement(By.xpath('//h1'))
  const actualHeader = await header.getText();
  const containsHeader = actualHeader.includes(expectedHeader);
  assert.equal(containsHeader, true);
});

Then('contact us link should be present', async function () {
  // assert header has this string
  const contactUsLink = await this.driver.findElement(By.xpath(`//a[contains(text(), 'Contact Us')]`))
  const actualContactUsLink = await contactUsLink.getText();
  assert.equal(actualContactUsLink, 'Contact Us');
});

Then('contact us header should be {string}', async function (header) {
  const contactUsHeader = await this.driver.findElement(By.xpath(`//h2[@class="h1"]`))
  const contactUsHeaderText = await contactUsHeader.getText();
  assert.equal(contactUsHeaderText, header);
});

Given('I fill up the {string} field with {string}', async function (placeholder, inputValue) {
  // get the input field with the given placeholder
  const inputField = await this.driver.findElement(By.xpath(`//*[@placeholder='${placeholder}']`));

  // fill up the field with the input value
  inputField.sendKeys(inputValue);
});


Then('I press the submit button', async function () {
  const submitButton = await this.driver.findElement(By.xpath(`//button[@type="submit"]`));
  submitButton.click();
});
