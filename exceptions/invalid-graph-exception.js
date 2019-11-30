class InvalidGraphError extends Error {
  constructor(...args) {
    super(...args);
    Error.captureStackTrace(this, InvalidGraphError);
  }
}

module.exports = { InvalidGraphError };