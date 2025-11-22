import rateLimit from '@fastify/rate-limit';

export const rateLimitConfig = {
  max: 100,
  timeWindow: '1 minute',
  errorResponseBuilder: () => ({
    error: 'Too Many Requests',
    message: 'Rate limit exceeded. Please try again later.',
  }),
};