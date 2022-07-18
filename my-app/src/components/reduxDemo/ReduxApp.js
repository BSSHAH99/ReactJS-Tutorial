import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./action/index";

const hendalchange = (e) => {
  console.log("handal chage is calliing");
  const value = e.target.value;
  console.log("thios is value", value);
};
function ReduxApp() {
  const myState = useSelector((state) => state.changeTheNumber.count);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container my-3">
        <div className="container">
          <h1>Increment and Decrement</h1>
          <input
            type="text"
            aria-label="First name"
            className="form-control"
            onChange={hendalchange}
            value={myState}
          />
          <button
            type="button"
            className=" my-3 mx-3 btn btn-primary"
            onClick={() => dispatch(decNumber())}
          >
            -
          </button>
          <button
            type="button"
            className="my-3 mx-3 btn btn-primary"
            onClick={() => dispatch(incNumber(5))}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReduxApp;
