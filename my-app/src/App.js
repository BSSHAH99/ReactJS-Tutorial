import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/Auth";
import RouterNav from "./components/RouterNav";
import { Helmet } from "react-helmet";
// import axios from "axios";

// axios.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// axios.interceptors.response.use(
//   function (response) {
//     console.log("this isinterceptors ", response.status);
//     window.alert("hiii bhavik");
//     // return response;
//     return Promise.reject(response);
//   },
//   function (error) {
//     console.log("object :>> ", error);
//     return Promise.reject(error);
//   }
// );

// let name = "bhavik";
function App() {
  // let isLogin = false;
  // const [showCounter, setShowCounter] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Helmet>
          <title>Bhavik's React Js Demo</title>
          <meta name="react js Project" content="Tutorial Of React js" />
          <meta name="keywords" content="React js" />
        </Helmet>

        <AuthProvider>
          {/* <Navbar titel={[123]} aboutText="About Us" /> */}
          {/* <Navbar titel={{ bhavik: 123456 }} aboutText="About Us" /> */}
          <Navbar titel={[{ bhavik: "TextUtils" }]} aboutText="About Us" />
          {/* <Navbar titel="TextUtils" aboutText="About Us" /> */}
          <RouterNav />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
