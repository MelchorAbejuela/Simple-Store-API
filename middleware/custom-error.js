const {
  CustomErrorHandler,
} = require("../custom-error-handler/customErrorHandler");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomErrorHandler) {
    res.status(err.statusCode).json(err.message);
  }
  res.status(500).json({ msg: "Unexpected Error." });
};

module.exports = errorHandlerMiddleware;
