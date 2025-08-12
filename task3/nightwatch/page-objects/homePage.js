module.exports = {
  // URL of the home page
  url: "http://automationpractice.multiformis.com/index.php",

  elements: {
    searchBar: {
      selector: "#search_query_top",
      locateStrategy: "css selector",
    },

    searchButton: {
      selector: "//form[@id='searchbox']/button[@type='submit']",
      locateStrategy: "xpath",
    },
  },
};
