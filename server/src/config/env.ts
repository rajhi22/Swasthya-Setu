import dotenv from 'dotenv';
import { resolve } from 'node:path';

// The npm scripts run from the repository root; load the server-scoped file
// explicitly before validating configuration.
dotenv.config({ path: resolve(process.cwd(), 'server', '.env') });
const required = ['MONGODB_URI', 'CLIENT_URL'] as const;
for (const key of required) if (!process.env[key]) throw new Error(`Missing required environment variable: ${key}`);
const clientUrls = [...new Set(process.env.CLIENT_URL!.split(',').map(value => value.trim()).filter(Boolean).map(value => {
  try { return new URL(value).origin; } catch { throw new Error('CLIENT_URL must contain one or more valid comma-separated origins.'); }
}))];
export const env = { port: Number(process.env.PORT || 5000), nodeEnv: process.env.NODE_ENV || 'development', mongoUri: process.env.MONGODB_URI!, clientUrl: process.env.CLIENT_URL!, clientUrls };
