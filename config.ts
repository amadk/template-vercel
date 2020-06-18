import 'dotenv/config';

export const config = {
  port: process.env.PORT || 8000,
  mongoUrl: process.env.MONGO_URL
    ? process.env.MONGO_URL
    : 'mongodb://localhost:27017/vercel',
  bodyLimit: '10mb',
  corsHeaders: ['Link'],
  origin: ['http://localhost:3000'].concat(
    (process.env.ORIGIN || '').split(', '),
  ),
};
