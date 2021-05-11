Feature: Front Page
  Scenario: Header should be present

    Given I open "https://www.symph.co"
    Then pause for 1000
    Then header should have "Made to order, handcrafted, digital products"

  Scenario: Contact Us link should be present

    Given I open "https://www.symph.co"
    Then pause for 1000
    Then contact us link should be present