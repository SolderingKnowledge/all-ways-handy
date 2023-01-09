import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { ImageList, Typography, ImageListItem, useMediaQuery } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { slides } from '../constants'

const useStyles = makeStyles(() => ({
	slides: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		background: 'lightgrey',
	},
	imgList: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		justifyItems: 'center',
		flexDirection: 'column',
		margin: 'auto',
	},
}))

export default function Slider(props) {
	const classes = useStyles()
	const isDesktop = useMediaQuery('(min-width:600px)')

	return (
		<Carousel className={classes.slides}>
			{slides.map((slide, i) => (
				<Item key={i} slide={slide} />
			))}
		</Carousel>
	)
}

function Item({ slide }) {
	const classes = useStyles()
	const isDesktop = useMediaQuery('(min-width:600px)')

	return (
		<ImageList sx={{ width: 350, height: 400 }} cols={2} rowHeight={164} className={classes.imgList}>
			{slide.results.map((result) => (
				<ImageListItem key={result.img} className={classes.imgList}>
					<Typography variant="subtitle1">{result.title}</Typography>
					<img
						src={`${result.img}`}
						srcSet={`${result.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
						alt={result.title}
						loading="lazy"
					/>
				</ImageListItem>
			))}
		</ImageList>
	)
}
