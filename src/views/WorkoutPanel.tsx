// @react
import React, { FC, useState } from "react";

// @redux
import { useActions, useTypedSelector } from "../store";

// @mui
import { Box, Grid, Container, Paper, Toolbar } from "@mui/material";

// @mui-icons
import { Reply as PreviousIcon } from "@mui/icons-material";

// @components
import { Header, Paginator, WorkoutCard } from "../components";

// @types
import { Workout, WorkoutPlan, WorkoutPlanDay } from "../types";

/**
 * @function WorkoutPanel
 * @description The workout panel on the left-hand side of the page
 * @returns React
 */
export const WorkoutPanel: FC = (): JSX.Element => {
	const { workouts, maxPage, visibleWorkouts } = useTypedSelector(
		(state) => state.workoutsState
	);

	const { paginateWorkouts } = useActions();

	const [page, setPage] = useState(1);

	// Render workouts and account for pagination
	const renderedWorkouts = visibleWorkouts.map((workout: Workout) => (
		<Grid item xs={12} md={6} key={workout.workout_id}>
			<WorkoutCard {...workout} />
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

				<Paginator
					maxPage={maxPage}
					page={page}
					onBack={() => {
						setPage(Math.max(1, page - 1));
						paginateWorkouts(page);
					}}
					onNext={() => {
						setPage(Math.min(maxPage, page + 1));
						paginateWorkouts(page);
					}}
				/>
			</Container>
		</Box>
	);
};
