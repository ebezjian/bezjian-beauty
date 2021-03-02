import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  
  title: {
    marginTop: 20,
  },
  bannerGrid: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
    marginTop: 50,
  },
  control: {
    padding: theme.spacing(0),
  },
}));