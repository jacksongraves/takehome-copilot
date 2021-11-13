// @css
import "./MainView.css";

// @react
import React, { useEffect } from "react";

// @redux
import { useActions, useTypedSelector } from "../store";

// @mui
import { Grid } from "@mui/material";

// @views
import { PlanPanel, WorkoutPanel } from "../views";

// @constants
// Relocate this
const user_id = "webdev@deltatrainer.fit";
/**
 * @function MainView
 * @description The main body view for the app
 * @returns React
 */
export const MainView = (): JSX.Element => {
	const { fetchUserWorkouts, fetchUserWorkoutPlans } = useActions();
	const { workouts, workoutPlans } = useTypedSelector((state) => state);

	useEffect(() => {
		(async () => {
			if (workouts.length === 0) {
				await fetchUserWorkouts(user_id);
			} else if (workoutPlans.length === 0 && workouts.length) {
				await fetchUserWorkoutPlans(user_id, workouts);
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [workouts]);

	return (
		<Grid
			container
			direction="row"
			justifyContent="space-evenly"
			alignItems="stretch"
		>
			<Grid item xs={4}>
				<WorkoutPanel />
			</Grid>
			<Grid item xs={8}>
				<PlanPanel />
			</Grid>
		</Grid>
	);
};
