const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const createServer = require('./createServer');
const db = require('./db'); // eslint-disable-line no-unused-vars

const server = createServer();
server.express.use(cookieParser());
server.express.use((request, response, next) => {
  const { token } = request.cookies;
  if (token) {
    const { userID } = jwt.verify(token, process.env.APP_SECRET);
    request.userId = userID;
  }
  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  details => console.log(`🚀 Server is now running on port http://localhost:${details.port}`) // eslint-disable-line no-console
);
