function createUser(username, password) {
  return {
    id: Date.now(),
    username,
    password
  };
}

function login(users, username, password) {
  return users.find(
    u => u.username === username && u.password === password
  );
}

module.exports = {
  createUser,
  login
};
