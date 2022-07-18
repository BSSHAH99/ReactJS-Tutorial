const redux = require("redux");
const reduxLogger = require("redux-logger");
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const Logger = reduxLogger.createLogger();
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function BuyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
}

function BuyIcecream() {
  return {
    type: BUY_ICECREAM,
    info: "first redux action",
  };
}

// (previousState,action)=>newState ;

const initialCakeState = {
  numOfCake: 10,
};

const initialIcecreamState = {
  numOfIcecream: 20,
};

const reducerCake = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    default:
      return state;
  }
};

const reducerIcecream = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  Cake: reducerCake,
  Icecream: reducerIcecream,
});
const store = createStore(rootReducer, applyMiddleware(Logger));
console.log("initialState", store.getState());
const unsubscribe = store.subscribe(
  () => {}
  // console.log("updateed", store.getState())
);
store.dispatch(BuyCake());
store.dispatch(BuyIcecream());
store.dispatch(BuyIcecream());
store.dispatch(BuyCake());
store.dispatch(BuyCake());
unsubscribe();
