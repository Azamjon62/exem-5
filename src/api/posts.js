import axios from "../service/axios";

const postsApi = {
  getAll: async () => axios.get("/products"),
  getItem: async (ID) => axios.get(`/products/${ID}`),
  deleteItem: (ID) => axios.delete(`/products/${ID}`),
  getAllCart: async () => axios.post("/carts"),

};

export default postsApi;