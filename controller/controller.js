const Product = require("../schema/product-schema");
const {
  createCustomError,
} = require("../custom-error-handler/customErrorHandler");

const getProducts = async (req, res, next) => {
  // search filter base on input or search box
  const { name, company, brand, inStock, numericFilters } = req.query;

  // an empty object to store all the filters
  let queryObject = {};

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (company) {
    queryObject.company = { $regex: company, $options: "i" };
  }
  if (brand) {
    queryObject.brand = { $regex: brand, $options: "i" };
  }
  if (inStock) {
    queryObject.inStock = inStock === "false" ? false : true;
  }
  if (numericFilters) {
    const operatorMap = {
      ">=": "gte",
      "<=": "lte",
    };

    const regEx = /\b(>=|<=)\b/g;

    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );

    filters = filters.split(",").join(" ");

    queryObject.numericFilters = filters;
  }

  try {
    const response = await Product.find(queryObject);

    if (response.length === 0) {
      return res.status(200).json({ msg: "no item found using your filter" });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getProducts;
