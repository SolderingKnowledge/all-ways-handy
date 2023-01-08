import Typography from '@mui/material/Typography'

import Container from '@mui/material/Container'
import { specialties, history } from '../constants'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
	about: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		margin: '0 2rem 0 2rem',
	},
	text: {
		marginBottom: '3rem',
	},
}))

const About = () => {
	const classes = useStyles()

	return (
		<main className={classes.about}>
			<div className={classes.text}>
				<Typography variant="subtitle1">{specialties}</Typography>
			</div>
			<div className={classes.text}>
				<Typography variant="subtitle1" className={classes.text}>
					{history}
				</Typography>
			</div>
		</main>
	)
}

export default About
