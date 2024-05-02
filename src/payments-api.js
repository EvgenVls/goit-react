import axios from "axios";

axios.defaults.baseURL = "https://65c23f3af7e6ea59682af8d1.mockapi.io";

export const getPaymens = async () => {
  const responce = await axios.get("/payments");
  return responce.data;
};

export const getPaymentsById = async (paymentId) => {
  const responce = await axios.get(`/payments/${paymentId}`);
  return responce.data;
};
