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
import { Workout, WorkoutPlan } from "../types";

export const fetchUserWorkouts = (user_id: string) => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.FETCH_USER_WORKOUTS_REQUEST,
		});

		try {
			const { data: workouts }: { data: Workout[] } = generateWorkouts(user_id);
			console.log(workouts);
			// const { data }: { data: WorkoutPlan[] } = await DeltaTrainer.post(
			// 	"/demo/getUserWorkouts",
			// 	{ user_id }
			// );

			dispatch({
				type: ActionType.FETCH_USER_WORKOUTS_SUCCESS,
				payload: { workouts },
			});

			dispatch({
				type: ActionType.PAGINATE_WORKOUTS,
				payload: { page: 1 },
			});
		} catch (error: any) {
			dispatch({
				type: ActionType.FETCH_USER_WORKOUTS_FAILURE,
				payload: { error },
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
			const { data: workoutPlans }: { data: WorkoutPlan[] } =
				generateWorkoutPlans(user_id, workouts);
			console.log(workoutPlans);
			// const { data }: { data: WorkoutPlan[] } = await DeltaTrainer.post(
			// 	"/demo/getUserWorkoutPlans",
			// 	{ user_id }
			// );
			// console.log(data);

			dispatch({
				type: ActionType.FETCH_USER_WORKOUT_PLANS_SUCCESS,
				payload: { workoutPlans },
			});

			dispatch({
				type: ActionType.PAGINATE_WEEKS,
				payload: { page: 1 },
			});
		} catch (error: any) {
			dispatch({
				type: ActionType.FETCH_USER_WORKOUT_PLANS_FAILURE,
				payload: { error },
			});
		}
	};
};

export const duplicateWorkout =
	(workout_id: string, page: number) => (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.DUPLICATE_WORKOUT,
			payload: { workout_id },
		});

		dispatch({
			type: ActionType.PAGINATE_WORKOUTS,
			payload: { page },
		});
	};

export const deleteWorkout =
	(workout_id: string, page: number) => (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.DELETE_WORKOUT,
			payload: { workout_id },
		});

		dispatch({
			type: ActionType.PAGINATE_WORKOUTS,
			payload: { page },
		});
	};

export const paginateWorkouts = (page: number) => {
	return {
		type: ActionType.PAGINATE_WORKOUTS,
		payload: { page },
	};
};

// Workout Plans
export const removeWorkoutFromPlan = (workout_id: string) => {
	return {
		type: ActionType.REMOVE_WORKOUT_FROM_PLAN,
		payload: { workout_id },
	};
};
export const paginateWeeks = (direction: number) => {
	return {
		type: ActionType.PAGINATE_WEEKS,
		payload: {},
	};
};
