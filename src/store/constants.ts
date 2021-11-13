// Export constants for each Redux dispatch action type
export const CONST_NAME = "CONST_NAME";

// Export interfaces for Redux actions
export interface TBDAction {
	type: string;
	payload: any;
}

export const FETCH_USER_WORKOUT_PLANS_REQUEST =
	"FETCH_USER_WORKOUT_PLANS_REQUEST";
export const FETCH_USER_WORKOUT_PLANS_SUCCESS =
	"FETCH_USER_WORKOUT_PLANS_SUCCESS";
export const FETCH_USER_WORKOUT_PLANS_FAILURE =
	"FETCH_USER_WORKOUT_PLANS_FAILURE";

export const FETCH_USER_WORKOUTS_REQUEST = "FETCH_USER_WORKOUTS_REQUEST";
export const FETCH_USER_WORKOUTS_SUCCESS = "FETCH_USER_WORKOUTS_SUCCESS";
export const FETCH_USER_WORKOUTS_FAILURE = "FETCH_USER_WORKOUTS_FAILURE";
