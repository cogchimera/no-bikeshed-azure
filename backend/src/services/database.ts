import pg from 'pg';
import { config } from '../config.js';

const { Pool } = pg;

export const db = new Pool({
  connectionString: config.databaseUrl,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

db.query('SELECT NOW()', (err) => {
  if (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  }
  console.log('Database connected');
});

process.on('SIGTERM', () => {
  db.end(() => {
    console.log('Database pool closed');
    process.exit(0);
  });
});