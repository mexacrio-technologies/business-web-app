import { Sequelize } from 'sequelize';
import { fileURLToPath } from 'node:url';
import { config } from './env.js';

const storage = fileURLToPath(new URL('../../data/mexacrio.sqlite', import.meta.url));

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage,
  logging: false
});
