import React from 'react'
import Typography from '@mui/material/Typography'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import { makeStyles } from '@mui/styles'
import { phoneNumber, email, location } from '../constants'

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
		marginBottom: '3rem',
	},
}))

const Contact = () => {
	const classes = useStyles()

	return (
		<div className={classes.contact}>
			<div className={classes.container}>
				<PhoneIcon />
				&nbsp;
				<Typography>{phoneNumber}</Typography>
			</div>
			<div className={classes.container}>
				<LocationOnIcon />
				&nbsp;
				<Typography>{location}</Typography>
			</div>
			<div className={classes.container}>
				<EmailIcon />
				&nbsp;
				<Typography>{email}</Typography>
			</div>
		</div>
	)
}

export default Contact
