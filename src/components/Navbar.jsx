import * as React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { Toolbar, IconButton, Typography, Button, Box, AppBar } from '@mui/material'
import { appName } from '../constants.js'
import { navItems } from '../constants'

const Navbar = ({ toggleDrawer }) => {
	return (
		<AppBar component="nav">
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={toggleDrawer}
					sx={{ mr: 2, display: { sm: 'none' } }}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" component="h1" sx={{ flexGrow: 1, display: { sm: 'block' } }}>
					{appName}
				</Typography>
				<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
					{navItems.map((item) => (
						<Button key={item} sx={{ color: '#fff' }}>
							{item}
						</Button>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
