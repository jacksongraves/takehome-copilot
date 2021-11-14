// @redux
import produce from "immer";
import * as ActionType from "../constants";

import { WorkoutPlan } from "../../types";

const initialState: WorkoutPlan[] = [];

const initialStateMeta = {
	loading: false,
	workoutPlan: [],
	activeWorkoutPlan: null,
	error: null,
};

// We will start with one reducer (in this case) to handle the state of workouts.
export const workoutPlansReducer = produce(
	(state = initialState, { type, payload }) => {
		switch (type) {
			case ActionType.FETCH_USER_WORKOUT_PLANS_SUCCESS:
				state.push(...payload);
				break;
			case ActionType.FETCH_USER_WORKOUT_PLANS_FAILURE:
				console.log(payload);
				break;
			default:
				break;
		}
		return state;
	},
	initialState
);
