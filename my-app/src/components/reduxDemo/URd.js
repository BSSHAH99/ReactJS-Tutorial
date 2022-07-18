import { React, useReducer } from "react";

// import { useDispatch } from "react-redux";

const hendalchange = (e) => {
  console.log("handal chage is calliing");
  const value = e.target.value;
  console.log("thios is value", value);
};

const initialstate = {
  count: 0,
};
export const reducercount = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    case "RESET":
      return initialstate;

    default:
      return state;
  }
};

function URd() {
  const [state, dispatch] = useReducer(reducercount, initialstate);

  useReducer(reducercount, initialstate);
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
            value={state.count}
          />
          <button
            type="button"
            className=" my-3 mx-3 btn btn-primary"
            onClick={() => dispatch("DECREMENT")}
          >
            -
          </button>
          <button
            type="button"
            className="my-3 mx-3 btn btn-primary"
            onClick={() => dispatch("INCREMENT")}
          >
            +
          </button>
          <button
            type="button"
            className="my-3 mx-3 btn btn-primary"
            onClick={() => dispatch("RESET")}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default URd;
