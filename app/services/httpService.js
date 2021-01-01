import axios from "axios";
import { token } from "../config/config.json";

//axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
};
