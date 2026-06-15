import axios from "axios";

const API_URL = "https://quoteboard-mern-1.onrender.com/api/quotes";

export const getQuotes = () => {
  return axios.get(API_URL);
};

export const createQuote = (quote) => {
  return axios.post(API_URL, quote);
};

export const updateQuote = (id, quote) => {
  return axios.put(`${API_URL}/${id}`, quote);
};

export const deleteQuote = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const toggleFavourite = (id, favourite) => {
  return axios.put(`${API_URL}/${id}`, {
    favourite,
  });
};