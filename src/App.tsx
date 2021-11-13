// @react
import React from "react";

// @redux
import { Provider } from "react-redux";
import store from "./store";

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
	<Provider store={store}>
		<CssBaseline />
		<Header />
		<MainView />
		{/* <Container maxWidth="lg">
			<Grid container justifyContent="center" spacing={10}></Grid>
		</Container> */}
		<Footer />
	</Provider>
);
