import axios from 'axios';

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 6000
});

// # Request
request.interceptors.request.use(function(config) {
  // ...

  return config;
}, function (error) {
  return Promise.reject(error);
});

// # response
request.interceptors.response.use(function(response) {
  // ...

  return response;
}, function (error) {
  return Promise.reject(error);
});

window.request = request;
