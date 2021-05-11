const webdriver = require('selenium-webdriver');
const { By, Key } = webdriver;

const getButtonElementByContent = (content, tag='button', after='none') => {
    if (after !== 'none'){
        return By.xpath(`//*[text()[contains(.,'${after}')]]/following::${tag}[contains(text(), '${content}')]`);
    } else {
        return By.xpath(`//${tag}[contains(text(), '${content}')]`);
    }
}

const getElementByContent = (content, tag='*', after='none') => {
    if (after !== 'none'){
        return By.xpath(`//*[text()[contains(.,'${after}')]]/following::${tag}[text()[contains(.,'${content}')]]`);
    } else {
        if(tag === 'label') {
            return By.xpath(`//${tag}[text()='${content}']`);
        } else {
            return By.xpath(`//${tag}[text()[contains(.,'${content}')]]`);
        }
    }
}

const getElementByExactMatch = (content, tag='*') => {
    return By.xpath(`//${tag}[text()='${content}']`);
}

const getInputElementByPlaceholder = (placeholder, after='none') => {
    if (after !== 'none'){
        return By.xpath(`//*[text()[contains(.,'${after}')]]/following::input[@placeholder='${placeholder}']`);
    } else {
        return By.xpath(`//input[@placeholder='${placeholder}']`);
    }
}

const getTextareaElementByPlaceholder = (placeholder) => {
    return By.xpath(`//textarea[@placeholder='${placeholder}']`);
}

const getFollowingSiblingElement = (tag) => {
    return By.xpath(`.//following-sibling::${tag}`);
}

const selectByVisibleText = async (select, textDesired) => {
    // select.sendKeys(textDesired, Key.RETURN);
    select.sendKeys(textDesired);
};

const getByTestId = (testId) => {
    return By.xpath(`//*[@data-test-id="${testId}"]`);
};

module.exports = {
    getButtonElementByContent,
    getByTestId,
    getElementByContent,
    getElementByExactMatch,
    getInputElementByPlaceholder,
    getFollowingSiblingElement,
    getTextareaElementByPlaceholder,
    selectByVisibleText,
}