import * as React from 'react'
import { ImageList, Typography, ImageListItem } from '@mui/material'

export default function Images() {
	return (
		<ImageList sx={{ width: 500, height: 450 }} cols={2} rowHeight={164}>
			{/* <ImageList> */}
			{itemData.map((item) => (
				<ImageListItem key={item.img}>
					<Typography>{item.title}</Typography>
					<img
						src={`${item.img}`}
						// srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
						alt={item.title}
						loading="lazy"
					/>
				</ImageListItem>
			))}
		</ImageList>
	)
}

const itemData = [
	{
		img: 'https://s3-media0.fl.yelpcdn.com/projectphoto/qdxoeI726xdSXKh02g_fbQ/o.jpg',
		title: 'Before',
	},
	{
		img: 'https://s3-media0.fl.yelpcdn.com/projectphoto/-BuPto1LSB4dKBJqN1aNtA/o.jpg',
		title: 'After',
	},
	{
		img: 'https://s3-media0.fl.yelpcdn.com/bphoto/1NnJEUHe6lmovJdMoHHjAg/o.jpg',
		title: 'Bookshelf',
	},
	{
		img: 'https://s3-media0.fl.yelpcdn.com/bphoto/sHI3BIYjUaDE8ZAewglbng/o.jpg',
		title: 'Kitchen',
	},
	{
		img: 'https://s3-media0.fl.yelpcdn.com/bphoto/1vnjZ641F_A2clo7QctHyQ/o.jpg',
		title: 'Hats',
	},
	{
		img: 'https://s3-media0.fl.yelpcdn.com/bphoto/a_InCgADBhYGwCn0Q5ofKw/o.jpg',
		title: 'Honey',
	},
	{
		img: 'https://s3-media0.fl.yelpcdn.com/bphoto/g-N88g4OCL1r-zgDcNO9bQ/o.jpg',
		title: 'Basketball',
	},
	{
		img: 'https://s3-media0.fl.yelpcdn.com/bphoto/sX3KgFH4YkGeUJVE1GPZjA/o.jpg',
		title: 'Fern',
	},
	{
		img: 'https://s3-media0.fl.yelpcdn.com/bphoto/9CwbpiTNAWFaAzxe6j_pYg/o.jpg',
		title: 'Mushrooms',
	},
	{
		img: 'https://s3-media0.fl.yelpcdn.com/bphoto/xorIUOlvuOaN5MIreFaAtw/o.jpg',
		title: 'Tomato basil',
	},
	{
		img: 'https://s3-media0.fl.yelpcdn.com/bphoto/CSZQBSGB74leX9mpiqCK2w/o.jpg',
		title: 'Sea star',
	},
	{
		img: 'https://s3-media0.fl.yelpcdn.com/bphoto/dmh-4GVZikEKC31f_TMOnQ/o.jpg',
		title: 'Bike',
	},
]
