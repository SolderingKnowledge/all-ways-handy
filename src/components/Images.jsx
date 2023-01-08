import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

export default function Images() {
	return (
		// <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
		<ImageList>
			{itemData.map((item) => (
				<ImageListItem key={item.img}>
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
		img: 'https://s3-media0.fl.yelpcdn.com/bphoto/wbMVnx4O5xWF1Uqe-XTCLg/o.jpg',
		title: 'Breakfast',
	},
	{
		img: 'https://s3-media0.fl.yelpcdn.com/bphoto/9D6tqS6lFn0gI8MTD1WMSw/o.jpg',
		title: 'Burger',
	},
	{
		img: 'https://s3-media0.fl.yelpcdn.com/bphoto/1NnJEUHe6lmovJdMoHHjAg/o.jpg',
		title: 'Camera',
	},
	{
		img: 'https://s3-media0.fl.yelpcdn.com/bphoto/sHI3BIYjUaDE8ZAewglbng/o.jpg',
		title: 'Coffee',
	},
	// {
	// 	img: 'https://s3-media0.fl.yelpcdn.com/bphoto/1vnjZ641F_A2clo7QctHyQ/o.jpg',
	// 	title: 'Hats',
	// },
	// {
	// 	img: 'https://s3-media0.fl.yelpcdn.com/bphoto/a_InCgADBhYGwCn0Q5ofKw/o.jpg',
	// 	title: 'Honey',
	// },
	// {
	// 	img: 'https://s3-media0.fl.yelpcdn.com/bphoto/g-N88g4OCL1r-zgDcNO9bQ/o.jpg',
	// 	title: 'Basketball',
	// },
	// {
	// 	img: 'https://s3-media0.fl.yelpcdn.com/bphoto/sX3KgFH4YkGeUJVE1GPZjA/o.jpg',
	// 	title: 'Fern',
	// },
	// {
	// 	img: 'https://s3-media0.fl.yelpcdn.com/bphoto/9CwbpiTNAWFaAzxe6j_pYg/o.jpg',
	// 	title: 'Mushrooms',
	// },
	// {
	// 	img: 'https://s3-media0.fl.yelpcdn.com/bphoto/xorIUOlvuOaN5MIreFaAtw/o.jpg',
	// 	title: 'Tomato basil',
	// },
	// {
	// 	img: 'https://s3-media0.fl.yelpcdn.com/bphoto/CSZQBSGB74leX9mpiqCK2w/o.jpg',
	// 	title: 'Sea star',
	// },
	// {
	// 	img: 'https://s3-media0.fl.yelpcdn.com/bphoto/dmh-4GVZikEKC31f_TMOnQ/o.jpg',
	// 	title: 'Bike',
	// },
]
