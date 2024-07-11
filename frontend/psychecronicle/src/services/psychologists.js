import axios from "axios";

const baseUrl = "/api/psychologists";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getQuotes = async () => {
  const response = await axios.get(`${baseUrl}/psychologists/quotes`);
  return response.data;
};

const getOne = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

export default { getAll, getQuotes, getOne };
