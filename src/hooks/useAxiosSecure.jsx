import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext); // Assuming you have a logOut method in your AuthContext

  // Create an axios instance with a base URL
  const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000' // Replace with your actual base URL
  });

  useEffect(() => {
    // Add an interceptor to inject the authorization header
    axiosSecure.interceptors.request.use(
      config => {
        const token = localStorage.getItem('access-token');
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );

    // Add an interceptor to handle 401 or 403 responses
    axiosSecure.interceptors.response.use(
      response => response,
      error => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          // Logout the user asynchronously and navigate to the login page
          logOut().then(() => {
            navigate('/login'); // Replace '/login' with your actual login page URL
          });
        }
        return Promise.reject(error);
      }
    );
  }, [navigate, logOut, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
