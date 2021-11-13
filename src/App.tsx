// @react
import React from "react";

// @redux
import { Provider } from "react-redux";
import store from "./store";

// @mui
import { CssBaseline } from "@material-ui/core";

// @pages
import { MainView } from "./pages";

// @components
import { Header, Footer } from "./components";

/**
 * App is the basic component that holds the views and components
 * @returns React
 */
export const App = (): JSX.Element => {
	return (
		<Provider store={store}>
			<CssBaseline />
			<Header text="CoPilot Take Home Assessment" />
			<MainView />
			<Footer />
		</Provider>
	);
};
