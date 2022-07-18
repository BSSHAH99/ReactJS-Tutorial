import React from "react";
// import TextFrom from "./TextFrom";
import MyErrorBoundary from "./MyErrorBoundary";
import Message from "./Message";
import Counter from "./Counter";
import RefcDemo from "./RefcDemo";
import Parent from "./Parent";
import NameList from "./NameList";
import Hooks from "./Hooks";
import ParentComponent from "./CallbackHooks/ParentComponent";
import UseEffectMemo from "./UseEffectMemo";
import { Routes } from "react-router-dom";
import UserDetails from "./UserDetails";
import Admin from "./Admin";
import Profile from "./Profile";
import Login from "./Login";

import ParentComp from "./ParentComp";
import CompA from "./Context/CompA";
import { UserProvider } from "./Context/UserContext";
import ClickCounter from "./Hoc/ClickCounter";
import HoverCounter from "./Hoc/HoverCounter";
import NoMatch from "./NoMatch";
import Products from "./Products";
import NewProducts from "./NewProducts";
import ProductsList from "./ProductsList";
import Users from "./Users";
import ProductDetails from "./ProductDetails";
import LoginShop from "./LoginShop";
import { mapRoute } from "./FunctionRouteMap";
import AddProduct from "./AddProduct";
import UpdateProducts from "./UpdateProducts";
import DeleteProducts from "./DeleteProducts";
import GoogleApi from "./GoogleApi";
import Task from "./Task/Task";
import JavascripAdvances from "./Javascript/JavascripAdvances";
import Forms from "./validation/Forms";
import Form from "./validation1/Form";
import ReduxApp from "./reduxDemo/ReduxApp";
import UsersData from "./Redux-thunk/UsersData";
import Rd from "./reduxDemo/Rd";
import ReusableComponents from "./ReusableComponents/ReusableComponents";
import RTd from "./Redux-thunk/RTd";
import URd from "./reduxDemo/URd";
import TestData from "./TestData";
import StudentFrom from "./ReusableComponents/StudentFrom";
import LoginJwt from "./JWT/LoginJwt";
import StudentProfile from "./JWT/StudentProfile";
import { AllExam } from "./JWT/AllExam";
import { Demo } from "./ReusableComponentsDemo/Demo";
import Env from "./Env";
const LayzyAbout = React.lazy(() => import("./AboutUs"));
const LayzyTextFrom = React.lazy(() => import("./TextFrom"));

function RouterNav() {
  const n = [
    {
      path: "/login",
      // goto: <Login />,
      goto: <LoginShop />,
      requireAuth: false,
    },
    {
      path: "/profile",

      goto: <Profile />,
      requireAuth: true,
    },
    {
      path: "/",
      goto: (
        <MyErrorBoundary>
          <React.Suspense fallback={<h1>Please Wait Home is Loading.....</h1>}>
            <LayzyTextFrom heading="Enter The Text Hear" />
          </React.Suspense>
        </MyErrorBoundary>
      ),
      // <TextFrom heading="Enter The Text Hear" />,
      requireAuth: true,
    },
    {
      path: "/setstate",
      goto: (
        <>
          <Message />
          <Counter />
        </>
      ),
      requireAuth: true,
    },
    {
      path: "/refs",
      goto: (
        <>
          <RefcDemo />
          <Parent />
        </>
      ),
      requireAuth: true,
    },
    {
      path: "/list",
      goto: <NameList />,
      requireAuth: true,
    },
    {
      path: "/context",

      goto: (
        <UserProvider value="Bhavik Shah">
          <CompA />
        </UserProvider>
      ),
      requireAuth: true,
    },
    {
      path: "/higher-order-components",

      goto: (
        <>
          <ClickCounter name="Bhavik" />
          <HoverCounter />
        </>
      ),
      requireAuth: true,
    },
    {
      path: "/hooks",
      goto: <Hooks />,
      requireAuth: true,
    },
    {
      path: "/useEffectvruseMemo",
      goto: <UseEffectMemo />,
      requireAuth: true,
    },
    {
      path: "/usecallback",
      goto: <ParentComponent />,
      requireAuth: true,
    },
    {
      path: "/memovspure",
      goto: <ParentComp />,
      requireAuth: true,
    },
    {
      path: "/products",
      goto: <Products />,
      requireAuth: true,
      subRoutes: [
        {
          index: true,
          goto: <ProductsList />,
        },
        {
          path: "featured",
          goto: <ProductsList />,
        },
        {
          path: ":proid",
          goto: <ProductDetails />,
        },
        {
          path: "new",
          goto: <NewProducts />,
        },
      ],
    },
    {
      path: "/add-products",
      goto: <AddProduct />,
      requireAuth: true,
    },
    {
      path: "/update-products",
      goto: <UpdateProducts />,
      requireAuth: true,
    },
    {
      path: "/delete-products",
      goto: <DeleteProducts />,
      requireAuth: true,
    },
    {
      path: "/google",
      goto: <GoogleApi />,
      requireAuth: true,
    },
    // {
    //   path: "/loginshop",
    //   goto: <LoginShop />,
    //   requireAuth: false,
    // },
    {
      path: "/users",
      goto: <Users />,
      requireAuth: true,
      subRoutes: [
        {
          path: ":userid",
          goto: <UserDetails />,
        },
        {
          path: "admin",
          goto: <Admin />,
        },
      ],
    },
    {
      path: "/aboutus",
      goto: (
        <React.Suspense fallback={<h1>Please Wait About is Loading.....</h1>}>
          <LayzyAbout />
        </React.Suspense>
      ),
      requireAuth: true,
    },
    {
      path: "/task",
      goto: <Task />,
      requireAuth: true,
    },
    {
      path: "/jvascript-advances",
      goto: <JavascripAdvances />,
      requireAuth: true,
    },
    {
      path: "/validation",
      goto: <Form />,
      requireAuth: true,
    },
    {
      path: "/dynamic-validation",
      goto: <Forms />,
      requireAuth: true,
    },
    {
      path: "/redux-functional-components",
      goto: <ReduxApp />,
      requireAuth: true,
    },
    {
      path: "/redux-class-components",
      goto: <Rd />,
      requireAuth: true,
    },
    {
      path: "/redux-thunk",
      goto: <UsersData />,
      requireAuth: true,
    },
    {
      path: "/redux-thunk-class-components",
      goto: <RTd />,
      requireAuth: true,
    },
    {
      path: "/usereducer",
      goto: <URd />,
      requireAuth: true,
    },
    {
      path: "/reusable-components",
      goto: <ReusableComponents />,
      requireAuth: true,
    },
    {
      path: "/reusable-student-from",
      goto: <StudentFrom />,
      requireAuth: true,
    },
    {
      path: "/test-table",
      goto: <TestData />,
      requireAuth: true,
    },
    {
      path: "/test-table",
      goto: <TestData />,
      requireAuth: true,
    },
    {
      path: "/jwt",
      goto: <LoginJwt />,
      requireAuth: true,
    },
    {
      path: "/student-profile",
      goto: <StudentProfile />,
      requireAuth: true,
    },
    {
      path: "/all-exmas",
      goto: <AllExam />,
      requireAuth: true,
    },
    {
      path: "/reusable-Components-demo",
      goto: <Demo />,
      requireAuth: true,
    },
    {
      path: "/env",
      goto: <Env />,
      requireAuth: true,
    },
    {
      path: "*",
      goto: <NoMatch />,
      // requireAuth : true
    },
  ];

  return (
    <>
      <Routes>{mapRoute(n)}</Routes>
    </>
  );
}

export default RouterNav;
