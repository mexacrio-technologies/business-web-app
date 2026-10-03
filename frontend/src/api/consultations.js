import apiClient from './client';

export const submitConsultation = async (consultation) => {
    const response = await apiClient.post('/consultations', consultation);
    return response.data;
};
