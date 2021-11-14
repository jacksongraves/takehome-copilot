// @react
import React, { FC, useState } from "react";

// @redux
import { useTypedSelector } from "../store";

// @mui
import { Avatar, Box, Grid, Container, Paper, Toolbar } from "@mui/material";

// @mui-icons
import { Reply as PreviousIcon } from "@mui/icons-material";

// @components
import { Header, WorkoutCard } from "../components";

// @types
import { Workout, WorkoutPlan, WorkoutPlanDay } from "../types";

interface PaginatorProps {
	maxPage: number;
	page: number;
	onNext: () => void;
	onBack: () => void;
}

/**
 * @function Paginator
 * @description The workout panel on the left-hand side of the page
 * @returns React
 */
export const Paginator: FC<PaginatorProps> = ({
	maxPage,
	page,
	onNext,
	onBack,
}): JSX.Element => {
	const isFirst = page === 1;
	const isLast = page === maxPage;
	return (
		<Grid container direction="row" alignItems="center" spacing={1}>
			<Grid item xs={6}>
				<Avatar
					sx={{ backgroundColor: isFirst ? "#bbbbbb" : "#3768F6" }}
					onClick={onBack}
				>
					<PreviousIcon />
				</Avatar>
			</Grid>
			<Grid item xs={6}>
				<Avatar
					sx={{ backgroundColor: isLast ? "#bbbbbb" : "#3768F6" }}
					onClick={onNext}
				>
					<PreviousIcon sx={{ transform: "scaleX(-1)" }} />
				</Avatar>
			</Grid>
		</Grid>
	);
};
