// @redux
import { combineReducers } from "redux";
import produce from "immer";

// @types
// TODO: import types

const initialState: any[] = [];
// We will start with one reducer (in this case) to handle the state of workouts.
export const reducers = combineReducers({
	workouts: produce((state = initialState, { type, payload }) => {
		switch (type) {
			case "ACTION_TYPE":
				state.push(payload);
				break;
			default:
				break;
		}
		return state;
	}, initialState),
});

// The RootState enables us to infer the return type of reducers and thus use types with our Redux state selectors
export type RootState = ReturnType<typeof reducers>;
export default reducers;
