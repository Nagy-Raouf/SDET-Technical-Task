const { v4: uuidv4 } = require("uuid");

/**
 * Generates a new unique user object for testing.
 * @returns {{ email: string, password: string, firstName: string, lastName: string }}
 */
function generateUser() {
  const id = uuidv4();
  return {
    name: `user_${id.slice(0, 4)}`,
    email: `user_${id.slice(0, 10)}@example.com`,
    password: `Pass!${id.slice(0, 6)}`,
  };
}

module.exports = { generateUser };
