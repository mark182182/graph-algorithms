class InvalidNodeError extends Error {
  constructor(...args) {
    super(...args);
    Error.captureStackTrace(this, InvalidNodeError);
  }
}

module.exports = { InvalidNodeError };