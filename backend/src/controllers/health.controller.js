import { ApiResponse } from '../utils/apiResponse.js';

export const getHealthStatus = (req, res) => {
  return res.status(200).json(
    new ApiResponse(200, {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      service: 'Mexacrio Technologies API',
      uptime: process.uptime()
    }, 'Service is operating nominally')
  );
};
