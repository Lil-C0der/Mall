import axios from "axios";

const instance = axios.create({
  baseURL: "http://152.136.185.210:8000/api/h8",
  // baseURL: "http://123.207.32.32:8000/api/h8",
  timeout: 5000
});

// 拦截器
instance.interceptors.request.use(
  config => {
    // console.log(config);
    return config;
  },
  err => {
    console.log("err---" + err);
  }
);

instance.interceptors.response.use(
  res => {
    // console.log(res.data);
    return res.data;
  },
  err => {
    console.log("err---" + err);
  }
);

export default instance;
