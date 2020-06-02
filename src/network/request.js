import axios from "axios";

const instance = axios.create({
  timeout: 5000
});

// 拦截器
instance.interceptors.request.use(
  config => {
    // console.log(config);
    return config;
  },
  err => Promise.reject(err)
);

instance.interceptors.response.use(
  res => {
    // console.log(res.data);
    return res.data;
  },
  err => Promise.reject(err)
);

export default instance;
