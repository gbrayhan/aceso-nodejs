const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { messagesFormService } = require('../services');

const createMessage = catchAsync(async (req, res) => {
  const message = await messagesFormService.createMessage(req.body);
  res.status(httpStatus.CREATED).send(message);
});

const getMessages = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await messagesFormService.queryMessages(filter, options);
  res.send(result);
});

module.exports = {
  createMessage,
  getMessages,
};
