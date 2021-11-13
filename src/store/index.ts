import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

// Set up the initial state
const initialState = {
	workouts: [],
};

// Set up middleware (for now, just the dev tools for debugging)
const middleware = composeWithDevTools(applyMiddleware());

// set up the Redux store
const store = createStore(reducers, initialState, middleware);

// Named exports
export * from "./actions";
export * from "./hooks";

// Default Redux store export
export default store;
