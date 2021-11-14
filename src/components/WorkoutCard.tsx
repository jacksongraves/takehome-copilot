// @react
import React, { FC, useState } from "react";

// @mui
import {
	Avatar,
	Box,
	Card,
	CardContent,
	Grid,
	Typography,
} from "@mui/material";

// @mui-icons
import {
	Create as EditIcon,
	ContentCopy as CopyIcon,
	Delete as DeleteIcon,
	Visibility as ViewIcon,
} from "@mui/icons-material";
import { useActions } from "../store";

// @types
import { Workout } from "../types";

/**
 * @function WorkoutCard
 * @description A workout card component with lightweight functionality to be built out
 * @returns {JSX} React
 */
export const WorkoutCard: FC<Workout> = ({
	name,
	workout_id,
	user_id,
}): JSX.Element => {
	const [inPanel, setInPanel] = useState(false);

	const { deleteWorkout, duplicateWorkout } = useActions();
	return (
		<Card sx={{ display: "flex" }}>
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				{/* <Grid container direction="row" alignItems="center" spacing={1}> */}
				<CardContent sx={{ flex: "1 0 auto" }}>
					<Typography component="div" variant="h5">
						{name}
					</Typography>
				</CardContent>
				{/* <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}> */}
				<Grid container direction="row" alignItems="center" spacing={1}>
					<Grid item xs={4}>
						<Avatar sx={{ backgroundColor: "#3768F6" }}>
							<EditIcon aria-label="edit workout" />
						</Avatar>
					</Grid>
					<Grid item xs={4}>
						{inPanel ? (
							<Avatar
								sx={{ backgroundColor: "#3768F6" }}
								// FIXME
								onClick={() => duplicateWorkout(workout_id, 1)}
							>
								<CopyIcon aria-label="copy workout" />
							</Avatar>
						) : (
							<Avatar sx={{ backgroundColor: "#3768F6" }}>
								<ViewIcon aria-label="view workout" />
							</Avatar>
						)}
					</Grid>
					<Grid item xs={4}>
						<Avatar
							sx={{ backgroundColor: "#3768F6" }}
							// FIXME
							onClick={() => deleteWorkout(workout_id, 1)}
						>
							<DeleteIcon aria-label="delete workout" />
						</Avatar>
					</Grid>
				</Grid>
				{/* </Grid> */}
			</Box>
			{/* </Box> */}
			{/* <CardMedia
				component="img"
				sx={{ width: 151 }}
				image="/static/images/cards/live-from-space.jpg"
				alt="Live from space album cover"
			/> */}
		</Card>
	);
};
