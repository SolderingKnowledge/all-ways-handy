import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import { makeStyles } from '@mui/styles'
import { phoneNumber, email, location, rentonAddress } from '../constants'

const useStyles = makeStyles(() => ({
	contact: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		display: 'flex',
		alignItems: 'center',
		marginTop: '1rem',
		marginBottom: '1rem',
	},
	link: {
		textDecoration: 'none',
		color: 'grey',
	},
}))

const Contact = () => {
	const classes = useStyles()

	return (
		<div className={classes.contact}>
			<div className={classes.container}>
				<PhoneIcon />
				&nbsp;
				<a href="tel:206-531-6471" className={classes.link}>
					{phoneNumber}
				</a>
			</div>
			<div className={classes.container}>
				<LocationOnIcon />
				&nbsp;
				<a href={rentonAddress} className={classes.link}>
					{location}
				</a>
			</div>
			<div className={classes.container}>
				<EmailIcon />
				&nbsp;
				<a href={`mailto:${email}`} className={classes.link}>
					{email}
				</a>
			</div>
		</div>
	)
}

export default Contact
