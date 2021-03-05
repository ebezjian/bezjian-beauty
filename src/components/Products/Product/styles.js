import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',

    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'black',
    position: 'relative',
  '& h3':{
    left: 0,
    top: '-30px',
    opacity: 0,
    width: '100%',
    display: 'flex',
    color: '#03dac5',
    fontSize: '30px',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(0,0,0,0.7)',
    transition: 'opacity 0.3s ease-in',

  }
    
  },
   h3: {
   },

}));