import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  
  title: {
    marginTop: 20,
  },
  bannerGrid: {
    flexGrow: 1,
    paddingTop: '55px',
    marginLeft: '35%',
  },
  paper: {
    padding: theme.spacing(4),
    backgroundColor: '#f4eecc',
    textAlign: 'center',
    color: theme.palette.text.secondary,    
    marginTop: 50,
    border: '30px solid #8cccaf',
    '& img':{
      width: '95%',
      height: 'auto',
    },

  },
  control: {
    padding: theme.spacing(0),
  },
  paper2: {
    padding: theme.spacing(4),
    backgroundColor: '#f4eecc',
    textAlign: 'center',
    color: theme.palette.text.secondary,    
    marginTop: 50,
    border: '30px solid #8cccaf',

  }

}));