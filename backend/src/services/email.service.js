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

const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
})[character]);

export const sendConsultationNotification = async (consultation) => {
    if (!config.smtpUser || !config.smtpPass) {
        throw new ApiError(503, 'Email notifications are not configured. Set SMTP_USER and SMTP_PASS in the backend environment.');
    }

    const { fullName, email, company, serviceInterest, goalsAndScope } = consultation;
    const serviceNames = {
        rag: 'AI Assistant & Private RAG',
        fullstack: 'Full-Stack Web App / SaaS',
        automation: 'Intelligent Automation Pipeline',
        custom: 'Custom AI & Model Integration',
        consulting: 'High-Level Engineering Advisory'
    };
    const message = [
        'Hello Mexacrio Technologies Team,',
        '',
        'A new consultation request has been submitted through the website.',
        '',
        'CONSULTATION DETAILS',
        `Name: ${fullName}`,
        `Business email: ${email}`,
        `Company: ${company}`,
        `Service area: ${serviceNames[serviceInterest] || serviceInterest}`,
        '',
        'GOALS AND SCOPE',
        goalsAndScope,
        '',
        'Please review the request and follow up with the prospective client at your convenience.',
        '',
        'Kind regards,',
        'Mexacrio Technologies Website'
    ].join('\n');
    const safeFullName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company);
    const safeService = escapeHtml(serviceNames[serviceInterest] || serviceInterest);
    const safeGoalsAndScope = escapeHtml(goalsAndScope).replace(/\r?\n/g, '<br>');
    const html = `
        <div style="margin:0;padding:32px 16px;background-color:#f3f4f8;font-family:Arial,Helvetica,sans-serif;color:#202333;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:640px;margin:0 auto;background-color:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
                <tr>
                    <td style="padding:28px 32px;background-color:#171528;color:#ffffff;">
                        <p style="margin:0 0 8px;font-size:12px;font-weight:bold;letter-spacing:1.5px;color:#c4b5fd;">MEXACRIO TECHNOLOGIES</p>
                        <h1 style="margin:0;font-size:24px;line-height:1.3;font-weight:600;color:#ffffff;">New consultation request</h1>
                    </td>
                </tr>
                <tr>
                    <td style="padding:28px 32px 12px;font-size:15px;line-height:1.6;color:#4b5563;">
                        Hello Mexacrio Technologies Team,<br>
                        A new consultation request has been submitted through the website. The details are below.
                    </td>
                </tr>
                <tr>
                    <td style="padding:12px 32px 8px;">
                        <h2 style="margin:0 0 12px;font-size:16px;color:#202333;">Consultation details</h2>
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;font-size:14px;line-height:1.5;">
                            <tr><td style="width:145px;padding:10px 12px;background-color:#f8f7fc;border-bottom:1px solid #e5e7eb;font-weight:bold;color:#55516a;">Name</td><td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#202333;">${safeFullName}</td></tr>
                            <tr><td style="padding:10px 12px;background-color:#f8f7fc;border-bottom:1px solid #e5e7eb;font-weight:bold;color:#55516a;">Business email</td><td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#202333;"><a href="mailto:${safeEmail}" style="color:#5b3dbb;text-decoration:none;">${safeEmail}</a></td></tr>
                            <tr><td style="padding:10px 12px;background-color:#f8f7fc;border-bottom:1px solid #e5e7eb;font-weight:bold;color:#55516a;">Company</td><td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#202333;">${safeCompany}</td></tr>
                            <tr><td style="padding:10px 12px;background-color:#f8f7fc;font-weight:bold;color:#55516a;">Service area</td><td style="padding:10px 12px;color:#202333;">${safeService}</td></tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style="padding:20px 32px 12px;">
                        <h2 style="margin:0 0 10px;font-size:16px;color:#202333;">Goals and scope</h2>
                        <div style="padding:16px;background-color:#f8f7fc;border-left:3px solid #7655d6;border-radius:4px;font-size:14px;line-height:1.7;color:#4b5563;">${safeGoalsAndScope}</div>
                    </td>
                </tr>
                <tr>
                    <td style="padding:16px 32px 28px;font-size:14px;line-height:1.6;color:#4b5563;">
                        Please review the request and follow up with the prospective client at your convenience.<br><br>
                        Kind regards,<br>
                        <strong style="color:#202333;">Mexacrio Technologies Website</strong>
                    </td>
                </tr>
            </table>
            <p style="margin:16px auto 0;max-width:640px;text-align:center;font-size:12px;color:#8b8b98;">Automated notification from the Mexacrio Technologies website.</p>
        </div>
    `;

    try {
        await transporter.sendMail({
            from: config.mailFrom,
            to: config.contactEmail,
            replyTo: { name: fullName, address: email },
            subject: `Consultation Request | ${company}`,
            text: message,
            html
        });
    } catch (error) {
        console.error(`[Email Error] ${error.code || 'SMTP_FAILURE'}`);
        throw new ApiError(502, 'We could not send your request right now. Please try again later.');
    }
};
