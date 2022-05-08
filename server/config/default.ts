import dotenv from 'dotenv';
dotenv.config();

const {
  DB_URI,
  PORT,
  PUBLIC_KEY,
  PRIVATE_KEY,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_OAUTH_REDIRECT_URL,
} = process.env;

export default {
  port: PORT,
  dbUri: DB_URI,
  origin: 'http://localhost:3000',
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  publicKey: PUBLIC_KEY,
  privateKey: PRIVATE_KEY,
  googleClientId: GOOGLE_CLIENT_ID,
  googleClientSecret: GOOGLE_CLIENT_SECRET,
  googleOauthRedirectUrl: GOOGLE_OAUTH_REDIRECT_URL,
};
