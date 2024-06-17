import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getTherapists = async () => {
  try {
    const response = await axios.get(`${API_URL}/therapists`);
    return response.data;
  } catch (error) {
    console.error('Error fetching therapists:', error);
    throw error;
  }
};

export const createAppointment = async (appointmentData) => {
  try {
    const response = await axios.post(`${API_URL}/appointments`, appointmentData);
    return response.data;
  } catch (error) {
    console.error('Error creating appointment:', error);
    throw error;
  }
};

export const login = async (loginData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, loginData);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const register = async (registerData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, registerData);
    return response.data;
  } catch (error) {
    console.error('Error registering:', error);
    throw error;
  }
};
