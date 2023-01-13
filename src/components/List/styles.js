import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		marginBottom: '30px',
	},
	currency: {
		margin: theme.spacing(1),
		minWidth: 120,
		marginTop: '1px',
		marginBottom:'15px',
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	loading: {
		height: '600px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		padding: '25px',
	},
	marginBottom: {
		marginBottom: '30px',
	},
	list: {
		height: '75vh',
		overflow: 'auto',
		'&::-webkit-scrollbar': {
			width: '0.8vw',
		},
		'&::-webkit-scrollbar-track': {
			backgroundColor: 'rgb(195, 195, 195)',
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: 'rgb(145, 145, 145)',
		},
	},
	heading: {
		color: 'grey',
		fontFamily: 'Rubik Bubbles',
	},
	button: {
		'&.css-1rwt2y5-MuiButtonBase-root-MuiButton-root': {
			minWidth: '60px',
			marginBottom: '6px',
			color: '#eeaaee',
			border: '1px solid #2596be',
		},
	},
}));
