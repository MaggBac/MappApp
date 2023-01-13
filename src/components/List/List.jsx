import React, { useState, useEffect, createRef } from 'react';
import {
	CircularProgress,
	Grid,
	Typography,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
	Box,
} from '@material-ui/core';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles.js';

const List = ({
	places,
	childClicked,
	isLoading,
	type,
	setType,
	rating,
	setRating,
	country,
	countrySecond,
}) => {
	const classes = useStyles();
	const [elRefs, setElRefs] = useState([]);

	const [textFirst, setTextFirst] = useState(1);
	const [textSecond, setTextSecond] = useState(1);
	const [valueFirst, setValueFirst] = useState(1);
	const [valueSecond, setValueSecond] = useState(1);

	useEffect(() => {
		setElRefs((refs) =>
			Array(places?.length)
				.fill()
				.map((_, i) => refs[i] || createRef())
		);
	}, [places]);

	function convert(e) {
		e.preventDefault();
		let num = (valueSecond / valueFirst) * textFirst;
		setTextSecond(num.toFixed(3));
	}

	return (
		<div className={classes.container}>
			<Typography variant='h4' className={classes.heading}>
				Places around you
			</Typography>
			{isLoading ? (
				<div className={classes.loading}>
					<CircularProgress size='5rem' />
				</div>
			) : (
				<>
					<FormControl className={classes.formControl}>
						<InputLabel id='type'>Type</InputLabel>
						<Select
							id='type'
							value={type}
							onChange={(e) => setType(e.target.value)}>
							<MenuItem value='restaurants'>Restaurants</MenuItem>
							<MenuItem value='hotels'>Hotels</MenuItem>
							<MenuItem value='attractions'>Attractions</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={classes.formControl}>
						<InputLabel id='rating'>Rating</InputLabel>
						<Select
							id='rating'
							value={rating}
							onChange={(e) => setRating(e.target.value)}>
							<MenuItem value=''>All</MenuItem>
							<MenuItem value='3'>Above 3.0</MenuItem>
							<MenuItem value='4'>Above 4.0</MenuItem>
							<MenuItem value='4.5'>Above 4.5</MenuItem>
						</Select>
					</FormControl>
					<form>
						<TextField
							id='outlined-basic'
							label='From'
							variant='outlined'
							value={textFirst || ''}
							onChange={(e) => setTextFirst(e.target.value)}
							autoComplete='off'
						/>
						<FormControl
							variant='outlined'
							className={classes.currency}
							onChange={(e) => setValueFirst(e.target.value)}>
							<Select native>
								{Object.keys(country).map((value, index) => (
									<option key={index} value={country[value]}>
										{value}
									</option>
								))}
							</Select>
						</FormControl>
						<Box display='flex' justifyContent='end' alignItems='end'>
							<Button
								style={{ maxWidth: 5 }}
								type='submit'
								variant='outlined'
								onClick={convert}
								className={classes.button}>
								<CurrencyExchangeIcon />
							</Button>
						</Box>
						<TextField
							id='outlined-basic'
							label='To'
							variant='outlined'
							value={textSecond || ''}
							onChange={(e) => setTextSecond(e.target.value)}
							autoComplete='off'
						/>
						<FormControl
							variant='outlined'
							className={classes.currency}
							onChange={(e) => setValueSecond(e.target.value)}>
							<Select native value={valueSecond}>
								{Object.keys(countrySecond).map((value, index) => (
									<option key={index} value={countrySecond[value]}>
										{value}
									</option>
								))}
							</Select>
						</FormControl>
					</form>

					<Grid container spacing={3} className={classes.list}>
						{places?.map((place, i) => (
							<Grid ref={elRefs[i]} key={i} item xs={12}>
								<PlaceDetails
									selected={Number(childClicked) === i}
									refProp={elRefs[i]}
									place={place}
								/>
							</Grid>
						))}
					</Grid>
				</>
			)}
		</div>
	);
};

export default List;
