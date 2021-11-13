// @react
import React, { FC } from "react";

// @mui
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

interface HeaderProps {
	text: string;
	backgroundColor?: string;
}
/**
 * @function Header
 * @description A basic Material UI header adapted from MUI <AppBar />
 */
export const Header: FC<HeaderProps> = ({
	text,
	backgroundColor,
}): JSX.Element => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="static"
				// {backgroundColor ? ...{color={backgroundColor || "default"}
				elevation={0}
				sx={{ backgroundColor: backgroundColor || "default" }}
			>
				<Toolbar>
					<Typography
						align="center"
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						{text}
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
