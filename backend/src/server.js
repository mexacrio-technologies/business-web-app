import app from './app.js';
import { config } from './config/env.js';
import { sequelize } from './config/database.js';
import Consultation from './models/consultation.model.js';
import { appendConsultationsToWorkbook } from './services/consultation-export.service.js';

const port = config.port;

try {
  await sequelize.authenticate();
  await sequelize.sync();

  try {
    const savedConsultations = await Consultation.findAll({ order: [['id', 'ASC']] });
    await appendConsultationsToWorkbook(savedConsultations.map((consultation) => consultation.toJSON()));
  } catch (error) {
    console.error(`[Excel Export Startup] ${error.code || error.name || 'WORKBOOK_FAILURE'}: ${error.message}`);
  }

  app.listen(port, () => {
    console.log(`Mexacrio Technologies API running in [${config.nodeEnv}] on http://localhost:${port}`);
    console.log(`API Base: http://localhost:${port}/api/v1`);
    console.log(`Health check: http://localhost:${port}/api/v1/health`);
  });
} catch (error) {
  console.error(`[Startup Error] Unable to initialize the SQLite database: ${error.message}`);
  process.exitCode = 1;
}
