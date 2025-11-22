import type { FastifyPluginAsync } from 'fastify';
import { db } from '../services/database.js';

export const healthRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get('/health', {
    schema: {
      description: 'Health check endpoint',
      tags: ['monitoring'],
      response: {
        200: {
          type: 'object',
          properties: {
            status: { type: 'string' },
            timestamp: { type: 'string' },
            checks: {
              type: 'object',
              properties: {
                database: { type: 'string' },
              },
            },
          },
        },
      },
    },
  }, async (request, reply) => {
    try {
      await db.query('SELECT 1');
      
      return {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        checks: {
          database: 'ok',
        },
      };
    } catch (error) {
      reply.code(503);
      return {
        status: 'unhealthy',
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  });
};