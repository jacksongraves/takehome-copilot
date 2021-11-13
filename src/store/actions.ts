// @redux
import { Action, Dispatch } from "redux";
import * as ActionType from "./constants";

// @apis
import {
	// DeltaTrainer,
	generateWorkoutPlans,
	generateWorkouts,
} from "../apis/deltatrainer";

// @types
import { Workout } from "../types";

export const fetchUserWorkouts = (user_id: string) => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.FETCH_USER_WORKOUTS_REQUEST,
		});

		try {
			const { data } = generateWorkouts(user_id);
			console.log(data);
			// const { data }: { data: WorkoutPlan[] } = await DeltaTrainer.post(
			// 	"/demo/getUserWorkouts",
			// 	{ user_id }
			// );
			// console.log(data);

			dispatch({
				type: ActionType.FETCH_USER_WORKOUTS_SUCCESS,
				payload: data,
			});
		} catch (error: any) {
			dispatch({
				type: ActionType.FETCH_USER_WORKOUTS_FAILURE,
				payload: error.message,
			});
		}
	};
};

export const fetchUserWorkoutPlans = (
	user_id: string,
	workouts: Workout[] = []
) => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.FETCH_USER_WORKOUT_PLANS_REQUEST,
		});

		try {
			const { data } = generateWorkoutPlans(user_id, workouts);
			console.log(data);
			// const { data }: { data: WorkoutPlan[] } = await DeltaTrainer.post(
			// 	"/demo/getUserWorkoutPlans",
			// 	{ user_id }
			// );
			// console.log(data);

			dispatch({
				type: ActionType.FETCH_USER_WORKOUT_PLANS_SUCCESS,
				payload: data,
			});
		} catch (error: any) {
			dispatch({
				type: ActionType.FETCH_USER_WORKOUT_PLANS_FAILURE,
				payload: error.message,
			});
		}
	};
};

export const duplicateWorkout = (workout_id: string) => {
	return {
		type: "DUPLICATE",
		payload: {},
	};
};

export const removeWorkoutFromPlan = (workout_id: string) => {
	return {
		type: "REMOVE",
		payload: {},
	};
};

export const deleteWorkout = (workout_id: string) => {
	return {
		type: "DELETE",
		payload: {},
	};
};

export const paginateWorkouts = () => {
	return {
		type: "PAGINATE_WORKOUTS",
		payload: {},
	};
};

export const paginateWeeks = () => {
	return {
		type: "PAGINATE_WEEKS",
		payload: {},
	};
};
