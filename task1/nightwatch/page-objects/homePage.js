module.exports = {
  // URL of the home page
  url: "http://s3-design-sample-site.s3-website-us-west-2.amazonaws.com/",

  elements: {
    contactLink: {
      selector: "//a[@href='contact.html']",
      locateStrategy: "xpath",
    },

    homeIdentifier: {
      selector: "//body",
      locateStrategy: "xpath",
    },
  },
};
