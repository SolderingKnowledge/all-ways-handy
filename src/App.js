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
import Slider from './components/Slider'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
	main: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
	},
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
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }} href={`#${item}`}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)

	const container = document.window !== undefined ? () => window().document.body : undefined
	return (
		<Box sx={{ display: 'flex' }} className={classes.main}>
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
				{/* <Images /> */}
				<Slider />
				<Contact />
			</Container>
		</Box>
	)
}

export default App
