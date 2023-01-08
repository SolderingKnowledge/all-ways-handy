import * as React from 'react'
import Navbar from './components/Navbar'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import CssBaseline from '@mui/material/CssBaseline'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { drawerWidth, appName, navItems } from './constants'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Images from './components/Images'
import Contact from './components/Contact'
import About from './components/About'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
	container: {
		marginTop: '2rem',
	},
}))

const App = () => {
	const classes = useStyles()
	const [mobileOpen, setMobileOpen] = React.useState(false)

	const toggleDrawer = () => {
		setMobileOpen((prevState) => !prevState)
	}

	const drawer = (
		<Box onClick={toggleDrawer} sx={{ textAlign: 'center' }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				{appName}
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)

	const container = document.window !== undefined ? () => window().document.body : undefined
	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<Navbar toggleDrawer={toggleDrawer} />
			<Box component="nav">
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={toggleDrawer}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>
			<Container className={classes.container}>
				<Toolbar />
				<About />
				<Images />
				<Contact />
			</Container>
		</Box>
	)
}

export default App
