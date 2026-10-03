import nodemailer from 'nodemailer';
import { config } from '../config/env.js';
import { ApiError } from '../utils/apiError.js';

const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: config.smtpPort,
    secure: config.smtpSecure,
    auth: {
        user: config.smtpUser,
        pass: config.smtpPass
    }
});

export const sendConsultationNotification = async (consultation) => {
    if (!config.smtpUser || !config.smtpPass) {
        throw new ApiError(503, 'Email notifications are not configured. Set SMTP_USER and SMTP_PASS in the backend environment.');
    }

    const { fullName, email, company, serviceInterest, goalsAndScope } = consultation;
    const message = [
        'New consultation request',
        '',
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Service interest: ${serviceInterest}`,
        '',
        'Goals and scope:',
        goalsAndScope
    ].join('\n');

    try {
        await transporter.sendMail({
            from: config.mailFrom,
            to: config.contactEmail,
            replyTo: { name: fullName, address: email },
            subject: `New consultation request from ${fullName}`,
            text: message
        });
    } catch (error) {
        console.error(`[Email Error] ${error.code || 'SMTP_FAILURE'}`);
        throw new ApiError(502, 'We could not send your request right now. Please try again later.');
    }
};
