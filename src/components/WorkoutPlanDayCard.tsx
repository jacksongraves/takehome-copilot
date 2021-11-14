// @react
import React, { FC, useState } from "react";

// @mui
import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";

// @components
import { WorkoutCard } from "./WorkoutCard";

// @types
import { WorkoutPlan, WorkoutPlanDay } from "../types";
import { useTypedSelector } from "../store";
interface Day {
	day: number;
}
/**
 * @function WorkoutPlanDayCard
 * @description A WorkoutPlanDay component with lightweight functionality to be built out
 * @returns {JSX} React
 */
export const WorkoutPlanDayCard: FC<WorkoutPlanDay & WorkoutPlan & Day> = (
	props
): JSX.Element => {
	const {
		workoutsState: { workouts },
		workoutPlansState: workoutPlans,
	} = useTypedSelector((state) => state);
	const [restDay, setRestDay] = useState(false);

	const { day, workout_ids } = props;

	const dayOfWeek = {
		0: "Sunday",
		1: "Monday",
		2: "Tuesday",
		3: "Wednesday",
		4: "Thursday",
		5: "Friday",
		6: "Saturday",
		7: "Extras",
	}[day];

	return (
		<Card
			variant="outlined"
			sx={{
				border: "none",
				backgroundColor: (theme) =>
					restDay ? theme.palette.grey[200] : theme.palette.background.paper,
				// bgcolor: "secondary",
				flexGrow: 1,
				p: 3,
			}}
		>
			<Grid
				container
				direction="row"
				justifyContent="space-between"
				alignItems="center"
			>
				<Grid item xs={6}>
					<Typography variant="body2" color="text.secondary">
						{dayOfWeek}
					</Typography>
				</Grid>
				<Grid item xs={6} alignItems="right">
					<Button onClick={() => setRestDay(!restDay)}>
						{restDay ? "Unmark as rest day" : "Mark as rest day"}
					</Button>
				</Grid>
				<Grid item xs={12}>
					<TextField
						id="outlined-basic"
						fullWidth
						label="Add notes"
						variant="outlined"
					/>
				</Grid>
				{restDay ? (
					<Grid item xs={12}>
						<Typography variant="h4" color="text.secondary" align="center">
							Rest Day
						</Typography>
					</Grid>
				) : (
					<></>
				)}

				{/* {workouts.map((workout) => (
				<WorkoutCard />
			))} */}
			</Grid>
		</Card>
	);
};
