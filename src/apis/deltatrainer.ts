// @axios
import axios from "axios";

// Relocate this
const user_id = "webdev@deltatrainer.fit";

export const DeltaTrainer = axios.create({
	baseURL: "https://api.deltatrainer.fit",
	headers: {
		"Content-Type": "application/json",
	},
});

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
