// @redux
import produce from "immer";
import * as ActionType from "../constants";

import { Workout } from "../../types";

const initialState: Workout[] = [];

// We will start with one reducer (in this case) to handle the state of workouts.
export const workoutsReducer = produce(
	(state = initialState, { type, payload }) => {
		switch (type) {
			case ActionType.FETCH_USER_WORKOUTS_SUCCESS:
				state.push(...payload);
				break;
			case ActionType.FETCH_USER_WORKOUTS_FAILURE:
				console.log(payload);
				break;
			default:
				break;
		}
		return state;
	},
	initialState
);
