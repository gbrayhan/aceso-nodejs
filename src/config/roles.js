const roles = ['user', 'admin'];

const roleRights = new Map();
roleRights.set(roles[0], ['getFormMessage', 'sendMessageForm']);
roleRights.set(roles[1], ['getUsers', 'manageUsers', 'getFormMessage', 'sendMessageForm']);

module.exports = {
  roles,
  roleRights,
};
