// @redux
import { combineReducers } from "redux";
import { workoutPlansReducer } from "./workoutPlansReducer";
import { workoutsReducer } from "./workoutsReducer";

// We will start with one reducer (in this case) to handle the state of workouts.
export const reducers = combineReducers({
	workouts: workoutsReducer,
	workoutPlans: workoutPlansReducer,
});

// The RootState enables us to infer the return type of reducers and thus use types with our Redux state selectors
export type RootState = ReturnType<typeof reducers>;
// export default reducers;
