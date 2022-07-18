import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
// import Lifecycle from "./components/Lifecycle";
import React, { useState } from "react";
import FragmentsDemo from "./components/FragmentsDemo";
import Table from "./components/Table";
import RefcDemo from "./components/RefcDemo";
import Parent from "./components/Parent";
import NameList from "./components/NameList";
import Hooks from "./components/Hooks";
import ParentComponent from "./components/CallbackHooks/ParentComponent";
import UseEffectMemo from "./components/UseEffectMemo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ParentComp from "./components/ParentComp";
import CompA from "./components/Context/CompA";
import { UserProvider } from "./components/Context/UserContext";
import { AuthProvider } from "./components/Auth";
import ClickCounter from "./components/Hoc/ClickCounter";
import HoverCounter from "./components/Hoc/HoverCounter";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import NewProducts from "./components/NewProducts";
import FeaturedProducts from "./components/FeaturedProducts";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
// import AboutUs from "./components/AboutUs";
const LayzyAbout = React.lazy(()=> import('./components/AboutUs'))





// let name = "bhavik";
function App() {
  // let isLogin = false;
  // const [showCounter, setShowCounter] = useState(false);
  return (
    <>

      <BrowserRouter>
      <AuthProvider>
     
     
        <Navbar titel="TextUtils" aboutText="About Us" />

        {/* <Routes>
        <Route path="/login" element={<Login />}></Route>
      
        </Routes> */}

        

        
        <Routes>
        
          {/* <Route path="/" element={<Navbar titel="TextUtils" aboutText="About Us" />}> */}
          <Route
            index
            element={<TextFrom heading="Enter The Text Hear " />}
          ></Route>
          <Route
            path="/setstate"
            element={
              <>
                <Message />
                <Counter />{" "}
              </>
            }
          ></Route>
          <Route
            path="/refs"
            element={
              <>
                <RefcDemo />
                <Parent />{" "}
              </>
            }
          ></Route>
          <Route path="/list" element={<NameList />}></Route>
          <Route
            path="/context"
            element={
              <UserProvider value="Bhavik Shah">
                <CompA />
              </UserProvider>
            }
          ></Route>
          <Route
            path="/higher-order-components"
            element={
              <>
                {" "}
                <ClickCounter name="Bhavik" />
                <HoverCounter />
              </>
            }
          ></Route>

          <Route path="/hooks" element={<Hooks />}></Route>
          <Route path="/useEffectvruseMemo" element={<UseEffectMemo />}></Route>
          <Route path="/usecallback" element={<ParentComponent />}></Route>
          <Route path="/memovspure" element={<ParentComp />}></Route>

          <Route path="/products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>

          <Route path="/login" element={<Login />}></Route>
          
            <Route path="/users" element={<Users/>}> 
            <Route path=":userId" element={<UserDetails/>}/> 
          <Route path="admin" element={<Admin/>}/> 
          </Route>

          {/* <RequireAuth><Profile /></RequireAuth> */}

          <Route path={'/profile'} element={<RequireAuth><Profile /></RequireAuth>}></Route>
          {/* <Route path="/login" element={<Login />}></Route> */}

          <Route path="*" element={<NoMatch />}></Route>
          

          <Route path="/aboutus" element={<React.Suspense fallback={(<h1>Bhavik Pl,iuz wait</h1>)}><LayzyAbout /></React.Suspense>}></Route>
          

          {/* </Route> */}
        </Routes>
       
        
        </AuthProvider>
      </BrowserRouter>
      
    </>
  );
}

export default App;
