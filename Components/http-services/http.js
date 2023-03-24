import axios from "axios";
axios.defaults.baseURL = "https://backendtest.ecommerce.gov.ir/";
axios.defaults.headers.common[
  "Authorization"
] = `Token 4e3259aa0d29aeba16af8abc2f6e012c4f7cbc07`;

export const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
