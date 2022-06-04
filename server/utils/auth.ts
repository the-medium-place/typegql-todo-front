const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

export default function signToken(authobj: { username: string, id: string }) {
  // const payload = { username, id };
  return jwt.sign({ data: authobj }, secret, { expiresIn: expiration });
}
