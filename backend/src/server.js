import app from './app.js';
import { config } from './config/env.js';

const port = config.port;
app.listen(port, () => {
  console.log(`Mexacrio Technologies API running in [${config.nodeEnv}] on http://localhost:${port}`);
  console.log(`API Base: http://localhost:${port}/api/v1`);
  console.log(`Health check: http://localhost:${port}/api/v1/health`);
});
