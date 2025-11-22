import type { FastifyError, FastifyReply, FastifyRequest } from 'fastify';

export async function errorHandler(
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply
) {
  request.log.error(error);
  
  if (error.validation) {
    return reply.code(400).send({
      error: 'Validation Error',
      message: 'Invalid request data',
      details: error.validation,
    });
  }
  
  if (error.statusCode === 429) {
    return reply.code(429).send({
      error: 'Too Many Requests',
      message: 'Rate limit exceeded',
    });
  }
  
  const statusCode = error.statusCode || 500;
  const message = statusCode === 500 ? 'Internal Server Error' : error.message;
  
  return reply.code(statusCode).send({
    error: error.name || 'Error',
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
  });
}