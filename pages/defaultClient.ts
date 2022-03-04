import axios from "axios";

const baseURL = (() => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3001/";
  } else {
    return "/";
  }
})();

const defaultClient = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

defaultClient.defaults.timeout = 3000;

defaultClient.interceptors.request.use(
  function (config) {
    // 요청 인터셉터
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

defaultClient.interceptors.response.use(
  function (response) {
    // 응답 인터셉터
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default defaultClient;
