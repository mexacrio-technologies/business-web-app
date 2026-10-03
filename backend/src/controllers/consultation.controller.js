import { sendConsultationNotification } from '../services/email.service.js';
import { appendConsultationToWorkbook } from '../services/consultation-export.service.js';
import Consultation from '../models/consultation.model.js';
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

        let savedConsultation;
        try {
            savedConsultation = await Consultation.create(consultation);
        } catch (error) {
            console.error(`[Database Error] ${error.name || 'SQL_FAILURE'}`);
            throw new ApiError(503, 'We could not save your request right now. Please try again later.');
        }

        const excelExported = await appendConsultationToWorkbook(savedConsultation.toJSON());

        let notificationSent = true;
        try {
            await sendConsultationNotification(consultation);
        } catch (error) {
            if (!(error instanceof ApiError)) {
                throw error;
            }
            notificationSent = false;
            console.error(`[Email Notification Error] ${error.statusCode}`);
        }

        return res.status(201).json(
            new ApiResponse(
                201,
                { received: true, excelExported, notificationSent },
                !excelExported
                    ? 'Your request was saved. The Excel workbook is currently unavailable, so it will be updated automatically when the file can be accessed. Do not submit again.'
                    : notificationSent
                        ? 'Consultation request submitted successfully. Our team will contact you.'
                        : 'Your consultation request was saved, but the email notification could not be sent.'
            )
        );
    } catch (error) {
        next(error);
    }
};
