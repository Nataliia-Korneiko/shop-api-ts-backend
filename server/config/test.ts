import dotenv from 'dotenv';
dotenv.config();

const { DB_URI, PORT, PUBLIC_KEY, PRIVATE_KEY } = process.env;

export default {
  dbUri: DB_URI,
  port: PORT,
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  publicKey: PUBLIC_KEY,
  privateKey: PRIVATE_KEY,
};
