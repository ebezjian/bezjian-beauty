import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    
    color: 'white'
  },
  media: {
    minHeight: 500,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white',
    backgroundImage: 'linear-gradient(#cc5973,#e0cfd3)',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));