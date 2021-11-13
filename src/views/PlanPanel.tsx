// @react
import React, { FC } from "react";

// @redux
import { useTypedSelector } from "../store";

// @mui
import { Box, Grid, Container, Paper, Toolbar } from "@mui/material";

// @components
import Chart from "./dashboard/Chart";
import Deposits from "./dashboard/Deposits";
import Orders from "./dashboard/Orders";
import { Header, WorkoutCard } from "../components";
/**
 * @function PlanPanel
 * @description The plan panel on the right-hand side of the page
 * @returns React
 */
export const PlanPanel: FC = (): JSX.Element => {
	const workouts = useTypedSelector((state) => state.workouts);

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
				<Grid container spacing={3}>
					{/* Chart */}
					<Grid item xs={12} md={8} lg={9}>
						<Paper
							sx={{
								p: 2,
								display: "flex",
								flexDirection: "column",
								height: 240,
							}}
						>
							<Chart />
						</Paper>
					</Grid>
					{/* Recent Deposits */}
					<Grid item xs={12} md={4} lg={3}>
						<Paper
							sx={{
								p: 2,
								display: "flex",
								flexDirection: "column",
								height: 240,
							}}
						>
							<Deposits />
						</Paper>
					</Grid>
					{/* Recent Orders */}
					<Grid item xs={12}>
						<Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
							<Orders />
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
