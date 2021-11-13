// @react
import React, { FC } from "react";

// @mui
import { Typography, Box } from "@mui/material";

/**
 * @function WorkoutPlanDay
 * @description A WorkoutPlanDay component with lightweight functionality to be built out
 * @returns {JSX} React
 */
export const WorkoutPlanDay: FC = (): JSX.Element => {
	return (
		<Box
			sx={{
				bgcolor: "secondary",
				flexGrow: 1,
				height: "100vh",
				overflow: "auto",
			}}
			component="main"
		>
			<Typography variant="body2" color="text.secondary" align="center">
				Workout Plan Day
			</Typography>
		</Box>
	);
};
