require("dotenv").config();

const dbConnect = require("./db/db-connect");
const Product = require("./schema/product-schema");
const productsJSON = require("./products.json");

const start = async () => {
  try {
    await dbConnect(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(productsJSON);
    console.log("json saved to db successfully.");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();
