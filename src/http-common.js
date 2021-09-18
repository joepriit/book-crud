import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:1111/v1",
  headers: {
    "Content-type": "application/json",
  },
});
