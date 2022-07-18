import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
  // timeout: 1000,
});

instance.interceptors.request.use(
  function (config) {
    // document.getElementById("overlay").style.display = "block";
    console.log("this is request response*****");
    console.log("this is request response*****", config.data);
    // Do something before request is sent
    return config;
  },
  function (error) {
    console.log("this is request error*****", error);
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    // document.getElementById("overlay").style.display = "none";
    console.log("this is response response*****", response.data);
    return response;
  },
  function (error) {
    console.log("this is response error*****", error);
    return Promise.reject(error);
  }
);

export default instance;
