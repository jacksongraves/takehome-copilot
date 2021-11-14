// @react
import React, { FC, useState } from "react";

// @mui
import { Typography, Box, Grid } from "@mui/material";

// @components
import { WorkoutPlanDayCard } from "./WorkoutPlanDayCard";

// @types
import { WorkoutPlan } from "../types";

/**
 * @function WorkoutPlanPage
 * @description A WorkoutPlan component with lightweight functionality to be built out
 * @returns {JSX} React
 */
export const WorkoutPlanPage: FC<WorkoutPlan> = (workoutPlan): JSX.Element => {
	const [restDay, setRestDay] = useState(false);

	const { workouts, date } = workoutPlan;

	return (
		<Box sx={{ bgcolor: "secondary" }}>
			<Box>
				<Typography variant="h4" color="text.secondary" align="center">
					{date}
				</Typography>
				<Typography variant="body2" color="text.secondary" align="center">
					Workout Plan
				</Typography>
				<Grid container direction="row" alignItems="center" spacing={3}>
					{workouts.map((workoutPlanDay, day) => (
						<Grid item xs={6}>
							<WorkoutPlanDayCard
								{...workoutPlan}
								{...workoutPlanDay}
								day={day}
							/>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
};
