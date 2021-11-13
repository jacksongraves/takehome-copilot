// @react
import React, { FC } from "react";

// @mui
import { Typography, Box } from "@mui/material";

/**
 * @function WorkoutPlan
 * @description A WorkoutPlan component with lightweight functionality to be built out
 * @returns {JSX} React
 */
export const WorkoutPlan: FC = (): JSX.Element => {
	return (
		<Box sx={{ bgcolor: "secondary" }}>
			<Box>
				<Typography variant="body2" color="text.secondary" align="center">
					Workout Plan
				</Typography>
			</Box>
		</Box>
	);
};