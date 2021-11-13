// @css
import "./MainView.css";

// @react
import React, { useState } from "react";

// @mui
import { Box, Grid } from "@mui/material";

/**
 * @function MainView
 * @description The main body view for the app
 * @returns React
 */
export const MainView = (): JSX.Element => {
	return (
		<Box sx={{ width: "100%" }}>
			<Grid container justifyContent="center" spacing={10}>
				<Grid item md={3}></Grid>
				<Grid item md={3}></Grid>
			</Grid>
		</Box>
	);
};
