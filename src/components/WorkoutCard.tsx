// @react
import React, { FC } from "react";

// @mui
import { Box, Card, CardContent, Typography } from "@mui/material";

// @mui-icons
import {
	Create as EditIcon,
	ContentCopy as CopyIcon,
	Delete as DeleteIcon,
} from "@mui/icons-material";

interface WorkoutProps {
	name: string;
}
/**
 * @function WorkoutCard
 * @description A workout card component with lightweight functionality to be built out
 * @returns {JSX} React
 */
export const WorkoutCard: FC<WorkoutProps> = ({ name }): JSX.Element => {
	return (
		<Card sx={{ display: "flex" }}>
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<CardContent sx={{ flex: "1 0 auto" }}>
					<Typography component="div" variant="h5">
						Live From Space
					</Typography>
					<Typography
						variant="subtitle1"
						color="text.secondary"
						component="div"
					>
						Mac Miller
					</Typography>
				</CardContent>
				<Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
					<EditIcon aria-label="edit workout" />
					<CopyIcon aria-label="copy workout" />
					<DeleteIcon aria-label="delete workout" />
				</Box>
			</Box>
			{/* <CardMedia
				component="img"
				sx={{ width: 151 }}
				image="/static/images/cards/live-from-space.jpg"
				alt="Live from space album cover"
			/> */}
		</Card>
	);
};
