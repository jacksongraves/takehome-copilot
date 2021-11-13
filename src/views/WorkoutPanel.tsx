// @react
import React, { FC, useState } from "react";

// @redux
import { useTypedSelector } from "../store";

// @mui
import { Box, Grid, Container, Paper, Toolbar } from "@mui/material";

// @mui-icons
import { Reply as PreviousIcon } from "@mui/icons-material";

// @components
import { Header, WorkoutCard } from "../components";

// @types
import { Workout, WorkoutPlan, WorkoutPlanDay } from "../types";

/**
 * @function WorkoutPanel
 * @description The workout panel on the left-hand side of the page
 * @returns React
 */
export const WorkoutPanel: FC = (): JSX.Element => {
	const [page, setPage] = useState(1);

	const workouts = useTypedSelector((state) => state.workouts);

	// Render workouts and account for pagination
	const renderedWorkouts = workouts.map((workout: Workout) => (
		<Grid item xs={12} md={6} key={workout.workout_id}>
			<WorkoutCard name={workout.name} />
		</Grid>
	));

	return (
		<Box
			component="main"
			sx={{
				backgroundColor: (theme) => theme.palette.grey[200],
				flexGrow: 1,
				// width: "20vw",
				height: "100vh",
				overflow: "scroll",
			}}
		>
			<Header text="Workouts" backgroundColor="#2C2C31" />

			<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
				<Grid container spacing={3}>
					{renderedWorkouts}
				</Grid>

				{/* Abstract as a Pagination component */}
				<PreviousIcon />
				<PreviousIcon sx={{ transform: "scaleX(-1)" }} />
			</Container>
		</Box>
	);
};
