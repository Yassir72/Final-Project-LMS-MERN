import axios from 'axios';
const createAxiosInstance = (jwtToken) => {
  const headers = jwtToken ? { Authorization: `Bearer ${jwtToken}` } : {};
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: headers,
  });
  return axiosInstance;
};

export default createAxiosInstance;