import { z } from 'zod';

const configSchema = z.object({
  nodeEnv: z.enum(['development', 'production', 'test']).default('development'),
  port: z.coerce.number().default(3001),
  databaseUrl: z.string().url(),
  corsOrigins: z.string().transform(s => s.split(',')),
  logLevel: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']).default('info'),
  jwtSecret: z.string().min(32),
});

export const config = configSchema.parse({
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  databaseUrl: process.env.DATABASE_URL,
  corsOrigins: process.env.CORS_ORIGINS || 'http://localhost:5173',
  logLevel: process.env.LOG_LEVEL,
  jwtSecret: process.env.JWT_SECRET || 'dev-secret-change-in-production-min-32-chars-long',
});