import 'dotenv/config';
const required = ['MONGODB_URI', 'CLIENT_URL'] as const;
for (const key of required) if (!process.env[key]) throw new Error(`Missing required environment variable: ${key}`);
export const env = { port: Number(process.env.PORT || 5000), nodeEnv: process.env.NODE_ENV || 'development', mongoUri: process.env.MONGODB_URI!, clientUrl: process.env.CLIENT_URL! };
