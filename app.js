const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.static("./public"));

const routes = require("./routes/routes");
app.use("/", routes);

const errorHandlerMiddleware = require("./middleware/custom-error");
app.use(errorHandlerMiddleware);

const pageNotFound = require("./middleware/page-notFound");
app.use(pageNotFound);

const port = process.env.PORT || 4000;

const dbConnect = require("./db/db-connect");
const start = async () => {
  await dbConnect(process.env.MONGO_URI);
  app.listen(port, () => {
    console.log(`server is listening on ${port}`);
  });
};
start();
