import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
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
				<Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
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
