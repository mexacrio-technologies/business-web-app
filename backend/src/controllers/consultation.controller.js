import { sendConsultationNotification } from '../services/email.service.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { ApiError } from '../utils/apiError.js';

const serviceInterests = new Set(['rag', 'fullstack', 'automation', 'custom', 'consulting']);

export const createConsultation = async (req, res, next) => {
  try {
    const { fullName, email, company, serviceInterest, goalsAndScope } = req.body ?? {};
    const fields = { fullName, email, company, serviceInterest, goalsAndScope };

    if (Object.values(fields).some((value) => typeof value !== 'string' || !value.trim())) {
      throw new ApiError(400, 'All fields are required to request a consultation');
    }

    const consultation = Object.fromEntries(
      Object.entries(fields).map(([key, value]) => [key, value.trim()])
    );

    if (consultation.fullName.length > 120 || consultation.company.length > 160 ||
        consultation.email.length > 254 || consultation.goalsAndScope.length > 5000) {
      throw new ApiError(400, 'One or more fields exceed the allowed length');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(consultation.email)) {
      throw new ApiError(400, 'Please provide a valid business email address');
    }

    if (!serviceInterests.has(consultation.serviceInterest)) {
      throw new ApiError(400, 'Please select a valid service area');
    }

    await sendConsultationNotification(consultation);

    return res.status(201).json(
      new ApiResponse(
        201,
        { received: true },
        'Consultation request submitted successfully. Our team will contact you.'
      )
    );
  } catch (error) {
    next(error);
  }
};
