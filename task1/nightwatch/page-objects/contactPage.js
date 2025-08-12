module.exports = {
  elements: {
    // Element that proves the contact page loaded
    contactPageIdentifier: {
      selector: "//p[contains(text(), 'CONTACT ACME CHEMICALS')]",
      locateStrategy: "xpath",
    },
  },
};
