import Fastify from 'fastify';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import { config } from './config.js';
import { errorHandler } from './middleware/error-handler.js';
import { requestLogger } from './middleware/request-logger.js';
import { healthRoutes } from './routes/health.js';

export const app = Fastify({
  logger: {
    level: config.logLevel,
    transport: config.nodeEnv === 'development' ? {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    } : undefined,
  },
});

await app.register(cors, {
  origin: config.corsOrigins,
  credentials: true,
});

await app.register(rateLimit, {
  max: 100,
  timeWindow: '1 minute',
});

await app.register(swagger, {
  openapi: {
    info: {
      title: 'W-Stack API',
      description: 'API documentation',
      version: '1.0.0',
    },
  },
});

await app.register(swaggerUi, {
  routePrefix: '/docs',
});

app.addHook('onRequest', requestLogger);
app.setErrorHandler(errorHandler);

await app.register(healthRoutes);

export default app;