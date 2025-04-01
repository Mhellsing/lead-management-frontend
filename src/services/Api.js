import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:44360',
});

export const getLeadsWithStatusNew = async () => {
    const response = await api.get('/Leads/GetLeadsWithStatusNew');
    return response.data.leads;
};

export const getLeadsWithStatusAccepted = async () => {
    const response = await api.get('/Leads/GetLeadsWithStatusAccepted');
    return response.data.leads;
};

export const acceptLead = async (lead) => {
    const response = await api.post('/Leads/AcceptLead', lead);
    return response.data.leads;
};

export const declineLead = async (lead) => {
    const response = await api.post('/Leads/DeclineLead', lead);
    return response.data.leads;
};   
   