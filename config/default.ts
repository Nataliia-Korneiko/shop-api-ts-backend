import dotenv from 'dotenv';
dotenv.config();

const { DB_URI } = process.env;

export default {
  port: 1337,
  dbUri: DB_URI,
  saltWorkFactor: 10,
};
