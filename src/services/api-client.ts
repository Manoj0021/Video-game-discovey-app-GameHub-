import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f98f1d35c07640e7b2b5033f9c3df5b8",
  },
});
