import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  chip: {
    margin: '5px 5px 5px 0',
  },
  subtitle: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
  },
  spacing: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  rating:{
    color: '#eef35d',
  },
  locationIcon:{
    color: '#96d3af',
  },
  phoneIcon:{
    color: '#f4d4e4',
  },
}));