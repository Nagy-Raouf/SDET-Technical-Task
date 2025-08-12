module.exports = {
  elements: {
    productList: {
      selector: "#product_list",
      locateStrategy: "css selector",
    },
    productName: {
      selector: "#product_list .product-name",
      locateStrategy: "css selector",
    },
    searchKeyword: {
      selector: "//h1/span[1]",
      locateStrategy: "xpath",
    },
  },
};
