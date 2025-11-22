import { app } from './app.js';
import { config } from './config.js';

const start = async () => {
  try {
    await app.listen({
      port: config.port,
      host: '0.0.0.0',
    });
    
    app.log.info(`Server listening on http://localhost:${config.port}`);
    app.log.info(`API docs: http://localhost:${config.port}/docs`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();