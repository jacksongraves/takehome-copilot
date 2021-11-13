export interface Workout {
	// unique id of workout
	workout_id: string;

	//  id of the user
	user_id: string;

	// name of the workout
	name: string;
}

export interface WorkoutPlanDay {
	// array of workout ids of workouts to be performed this day - must be empty if is_rest_day is true
	workout_ids: string[];

	// whether this day is manually designated as a rest day
	is_rest_day: boolean;
}

export interface WorkoutPlan {
	// unique id of workout plan
	workout_plan_id: string;

	// id of user associated
	user_id: string;

	// midnight sunday at beginning of workout plan in format "2021-04-18T00:00:00.000+00:00"
	date: string;

	// length 8 array of days where the first 7 are sunday-saturday and the last is an 'extras' day reserved for auxiliary workouts
	workouts: WorkoutPlanDay[];
}
