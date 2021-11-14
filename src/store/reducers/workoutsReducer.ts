// @redux
import produce from "immer";
import * as ActionType from "../constants";

import { Workout } from "../../types";

// const initialState: Workout[] = [];
const perPage = 10;

interface WorkoutState {
	loading: boolean;
	workouts: Workout[];
	visibleWorkouts: Workout[];
	page: number;
	maxPage: number;
	error: any;
}
const initialState: WorkoutState = {
	loading: false,
	workouts: [],
	visibleWorkouts: [],
	page: 1,
	maxPage: 1,
	error: null,
};

// We will start with one reducer (in this case) to handle the state of workouts.
export const workoutsReducer = produce(
	(state = initialState, { type, payload }) => {
		// const { page, workout_id } = payload;

		switch (type) {
			case ActionType.FETCH_USER_WORKOUTS_REQUEST:
				state.loading = true;
				state.workouts = [];
				state.page = 1;
				state.maxPage = 1;
				state.error = null;
				break;
			case ActionType.FETCH_USER_WORKOUTS_SUCCESS:
				state.loading = false;
				state.workouts = payload.workouts;
				state.maxPage = Math.ceil(payload.workouts.length / perPage);
				break;
			case ActionType.FETCH_USER_WORKOUTS_FAILURE:
				state.loading = false;
				state.error = payload.error;
				break;
			case ActionType.DUPLICATE_WORKOUT:
				const maybe: Workout | undefined = state.workouts.find(
					(workout: Workout) => workout.workout_id === payload.workout_id
				);
				if (maybe) {
					const duplicate = { ...maybe };
					state.workouts.push(duplicate);
				}
				break;
			case ActionType.DELETE_WORKOUT:
				const deleteIndex = state.workouts.findIndex(
					(workout: Workout) => workout.workout_id === payload.workout_id
				);
				if (deleteIndex !== -1) state.workouts.splice(deleteIndex, 1);

				break;
			case ActionType.PAGINATE_WORKOUTS:
				console.log(perPage * (state.page - 1), perPage);
				state.page = payload.page;
				state.visibleWorkouts = state.workouts.filter(
					(x, i) => i >= perPage * (state.page - 1) && i < perPage * state.page
				);

				// state.workouts.slice(
				// 	perPage * (state.page - 1),
				// 	perPage
				// );
				break;
			default:
				break;
		}
		return state;
	},
	initialState
);
