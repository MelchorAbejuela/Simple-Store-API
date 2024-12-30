class CustomErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError = (message, statusCode) => {
  return new CustomErrorHandler(message, statusCode);
};

module.exports = { CustomErrorHandler, createCustomError };
