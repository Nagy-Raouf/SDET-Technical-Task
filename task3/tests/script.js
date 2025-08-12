// Load  data from JSON file
const data = require("../data/searchData.json");

describe("Search Functionality Test", function () {
  let homePage, searchResultPage;

  before(function (browser) {
    homePage = browser.page.homePage();
    searchResultPage = browser.page.searchResultPage();
  });

  it("Should search for 'dress' and verify results", function (browser) {
    // =========================================
    // Step 1: Open home page
    // =========================================
    homePage.navigate();
    homePage.waitForElementVisible("@searchButton", 5000, "User is at the home page.");

    // =========================================
    // Step 2: Enter search value in search bar and click search
    // =========================================
    homePage.setValue("@searchBar", data.searchKeyword);
    homePage.click("@searchButton");
    searchResultPage.waitForElementVisible("@searchKeyword", 5000, "The result page is loaded");

    // =========================================
    // Step 3: Verify search results
    // =========================================
    browser.assert.textContains(
      searchResultPage.elements.searchKeyword,
      data.searchKeyword.toUpperCase(),
      "PASS: The search keyword is displayed correctly"
    );

    searchResultPage.waitForElementVisible("@productList", 5000, "All the products are visible");

    searchResultPage.api.elements("@productName", function (result) {
      this.assert.ok(result.value.length > 0, "Found at least one product");

      result.value.forEach((element) => {
        // Get the correct element ID (works for both W3C & JSON Wire)
        const elementId = element.ELEMENT || element["element-6066-11e4-a52e-4f735466cecf"];

        this.elementIdText(elementId, function (res) {
          const productName = res.value.toLowerCase();

          this.verify.ok(
            productName.includes(data.searchKeyword.toLowerCase()),
            `Product name "${productName}" contains "${data.searchKeyword}"`
          );
        });
      });
    });
  });

  after(function (browser) {
    browser.end();
  });
});
