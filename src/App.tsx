// @react
import React, { Fragment } from "react";

// @mui
import { Typography, Container } from "@mui/material";
import { CssBaseline, Grid } from "@material-ui/core";

// @views
import { MainView } from "./views";

// @components
import { Header, Footer } from "./components";

/**
 * App is the basic component that holds the views and components
 * @returns React
 */
export const App = (): JSX.Element => (
	<Fragment>
		<CssBaseline />
		<Header />
		<MainView />
		{/* <Container maxWidth="lg">
			<Grid container justifyContent="center" spacing={10}></Grid>
		</Container> */}
		<Footer />
	</Fragment>
);
