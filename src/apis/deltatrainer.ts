// @libraries
import axios from "axios";
import _ from "lodash";

// @generators
// import jsf from "json-schema-faker";
import { lorem, datatype } from "faker";

// @schemas
// import workoutSchema from "./workout-schema.json";
// import workoutPlanSchema from "./workoutPlan-schema.json";

// @types
import { Workout, WorkoutPlan } from "../types";

export const DeltaTrainer = axios.create({
	baseURL: "https://api.deltatrainer.fit",
	headers: {
		"Content-Type": "application/json",
	},
});

export const generateWorkouts = (user_id: string, count: number = 100) => {
	const workouts: Workout[] = [];

	for (let i = 0; i < count; i++) {
		const workout: Workout = {
			user_id,
			workout_id: datatype.uuid(),
			name: lorem.word(),
		};

		// jsf.generate(workoutSchema) as unknown as Workout;
		workouts.push(workout);
	}
	return { data: workouts };
};

export const generateWorkoutPlans = (
	user_id: string,
	workouts: Workout[],
	count: number = 100
) => {
	const workoutPlans: WorkoutPlan[] = [];

	for (let i = 0; i < count; i++) {
		const workoutPlan: WorkoutPlan = {
			workout_plan_id: datatype.uuid(),
			user_id,
			date: datatype.datetime().toISOString().replace("Z", "+00:00"),
			workouts: [
				"sunday",
				"monday",
				"tuesday",
				"wednesday",
				"thursday",
				"friday",
				"saturday",
				"extras",
			].map((day) => ({
				workout_ids: _.sampleSize(workouts, _.random(4, 20)).map(
					(workout: Workout) => workout.workout_id
				),
				is_rest_day: false,
			})),
		};

		workoutPlans.push(workoutPlan);
	}
	return { data: workoutPlans };
};

/**
 * @function getUserWorkouts
 * @description Lightweight controller for abstracting the endpoint from the business / destructuring logic
 * @param user_id The user id from session
 */
export const getUserWorkouts = async (user_id: string) => {
	const { data } = await DeltaTrainer.post("/demo/getUserWorkouts", {
		user_id,
	});

	if (data) {
		console.log(data);
	}
};

/**
 * @function getUserWorkoutPlans
 * @description Lightweight controller for abstracting the endpoint from the business / destructuring logic
 * @param user_id The user id from session
 */
export const getUserWorkoutPlans = async (user_id: string) => {
	const { data } = await DeltaTrainer.post("/demo/getUserWorkoutPlans", {
		user_id,
	});

	if (data) {
		console.log(data);
	}
};
