const cookieParser = require('cookie-parser');
require('dotenv').config();
const createServer = require('./createServer');
const db = require('./db').default; // eslint-disable-line no-unused-vars

const server = createServer();

server.express.use(cookieParser());
// TODO Use express middleware to handle populate current user
server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  details => console.log(`🚀 Server is now running on port http://localhost:${details.port}`) // eslint-disable-line no-console
);
