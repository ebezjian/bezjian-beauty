import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    
    backgroundImage: 'linear-gradient(#cc5973,#e0cfd3)',
    color: 'white'
  },
  media: {
    height: 300,
    paddingTop: '56.25%', // 16:9
    
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    underline: 'none',
  },
  cardContent: {
    underline: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white',
    position: 'relative',
    
      
  },

  link: {
    underline: 'none',
  },


}));