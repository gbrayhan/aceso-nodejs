const { MessagesForm } = require('../models');

/**
 * Create a message
 * @param {Object} messageBody
 * @returns {Promise<MessagesForm>}
 */
const createMessage = async (messageBody) => {
  const message = await MessagesForm.create(messageBody);
  return message;
};

/**
 * Query for messages
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryMessages = async (filter, options) => {
  const messages = await MessagesForm.paginate(filter, options);
  return messages;
};

/**
 * Get messages by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getMessagesByEmail = async (email) => {
  return MessagesForm.findOne({ email });
};

module.exports = {
  createMessage,
  queryMessages,
  getMessagesByEmail,
};
