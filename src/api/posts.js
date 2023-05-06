import axios from "../service/axios";

const postsApi = {
  getAll: async () => axios.get("/products"),
  getItem: async (ID) => axios.get(`/products/${ID}`),
  deleteItem: (ID) => axios.delete(`/products/${ID}`),
  updateItem: async (ID) => axios.put(`/products/${ID}`),

};

export default postsApi;