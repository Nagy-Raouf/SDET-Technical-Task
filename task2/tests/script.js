// Load registration data from JSON file
const data = require("../data/registrationData.json");

describe("LinkedIn Registration Test", function () {
  let homePage, registrationPage, securityPage;

  before(function (browser) {
    homePage = browser.page.linkedinHomePage();
    registrationPage = browser.page.linkedinRegistrationPage();
    securityPage = browser.page.linkedinSecurityPage();
  });

  it("Should complete LinkedIn registration flow", function (browser) {
    // =========================================
    // Step 1: Open LinkedIn home page
    // =========================================
    homePage.navigate();
    homePage.waitForElementVisible("@joinNowButton", 15000, "User is at the home page.");

    // =========================================
    // Step 2: Go to Registration page
    // =========================================
    homePage.click("@joinNowButton");

    // =========================================
    // Step 3: Fill Email & Password
    // =========================================
    registrationPage.waitForElementVisible("@emailInput", 15000, "User is at the Registration Page");
    registrationPage.setValue("@emailInput", data.email);
    registrationPage.setValue("@passwordInput", data.password);
    registrationPage.click("@agreeAndJoinButton");

    // =========================================
    // Step 4: Fill First & Last Name
    // =========================================
    registrationPage.waitForElementVisible("@firstNameInput", 15000, "The Registration form is displayed");
    registrationPage.setValue("@firstNameInput", data.firstName);
    registrationPage.setValue("@lastNameInput", data.lastName);
    registrationPage.click("@continueButton");

    // =========================================
    // Step 5: Verify Security Check Text
    // =========================================
    securityPage.waitForElementVisible("@securityCheck", 15000, "Security Check page is displayed");
    securityPage.assert.textEquals("@securityCheck", data.messages.securityCheck);
  });

  after(function (browser) {
    browser.end();
  });
});
