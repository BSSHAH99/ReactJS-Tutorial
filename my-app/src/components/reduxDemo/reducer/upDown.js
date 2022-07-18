const initialstate = {
  abc: "KKKK",
  bhavik: "bsshah",
  count: 10,
};

const changeTheNumber = (state = initialstate, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.number };

    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

export default changeTheNumber;
