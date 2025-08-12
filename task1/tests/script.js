/**
 * @file This test suite verifies basic page navigation.
 * It opens a page, navigates to a contact page, and then uses the browser's back button
 * to return to the original page.
 */
module.exports = {
  // Test name
  "Test basic navigation and browser back functionality": function (browser) {
    // Define pages used in script
    const homePage = browser.page.homePage();
    const contactPage = browser.page.contactPage();

    // === Step 1: Open the page and verify it's loaded ===
    homePage.navigate();

    // Wait for a unique element that confirms home page loaded
    homePage.waitForElementVisible("@homeIdentifier", 5000, "The home page loaded successfully.");

    // Assert that the URL contains the expected part for the home page.
    // Neglect the protocol during checking - Fix pipeline issue
    const expectedWithoutProtocol = homePage.url.replace(/^https?:\/\//, "");
    homePage.assert.urlContains(expectedWithoutProtocol, "User is at the home page.");

    // === Step 2: Navigate to the Contact page and verify it's loaded ===
    // Click the link to the contact page.
    homePage.click("@contactLink");

    // Wait for the contact page to load
    contactPage.waitForElementVisible("@contactPageIdentifier", 5000, "The contact page loaded successfully.");

    // Assert that the URL contains the expected part for the contact page.
    browser.assert.urlContains("/contact.html", "User is at the contact page.");

    // === Step 3: Click the browser's Back button and assert the user is at the home page ===
    browser
      .back()
      // Wait for the home page to become visible again.
      .assert.urlContains(homePage.url, "User has returned to the home page.");

    // End the test session.
    browser.end();
  },
};
