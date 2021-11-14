// @react
import React, { FC } from "react";

// @redux
import { useTypedSelector } from "../store";

// @mui
import { Box, Grid, Container } from "@mui/material";

// @mui-icons
import { Reply as PreviousIcon } from "@mui/icons-material";

// @components
import { Header, Paginator, WorkoutCard, WorkoutPlanPage } from "../components";
import { WorkoutPlan } from "../types";
/**
 * @function PlanPanel
 * @description The plan panel on the right-hand side of the page
 * @returns React
 */
export const PlanPanel: FC = (): JSX.Element => {
	const { workoutPlansState: workoutPlans } = useTypedSelector(
		(state) => state
	);

	return (
		<Box
			component="main"
			sx={{
				flexGrow: 1,
				height: "100vh",
				overflow: "scroll",
			}}
		>
			<Header text="Plan" backgroundColor="#2C2C31" />
			<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
				<Grid
					container
					direction="row"
					alignItems="center"
					spacing={3}
					padding={3}
				>
					{workoutPlans.map((workoutPlan: WorkoutPlan) => (
						<WorkoutPlanPage {...workoutPlan} />
					))}
				</Grid>

				{/* <WorkoutPlanPage /> */}
				{/* <Paginator /> */}
			</Container>
		</Box>
	);
};
