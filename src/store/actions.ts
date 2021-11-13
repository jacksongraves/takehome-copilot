// TODO: import types

export const duplicateWorkout = () => {
	return {
		type: "DUPLICATE",
		payload: {},
	};
};

export const removeWorkoutFromPlan = () => {
	return {
		type: "REMOVE",
		payload: {},
	};
};

export const deleteWorkout = () => {
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
