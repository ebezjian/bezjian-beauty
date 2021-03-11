import { makeStyles } from '@material-ui/core/styles';
import Background from '../../../assets/wallpaper.png';
export default makeStyles((theme) => ({
  background:{
    backgroundImage: `url(${Background})`,
  },
  title: {
    marginTop: 20,
    
  },
  bannerGrid: {
    flexGrow: 1,
    paddingTop: '20px',
    paddingBottom: '20px',
    marginLeft: '35%',
  },
  
  control: {
    padding: theme.spacing(0),
  },
  paper2: {
    padding: theme.spacing(4),
    backgroundColor: '#f4eecc',
    textAlign: 'center',
    color: theme.palette.text.secondary,    
    marginTop: 0,
    border: '30px solid #8cccaf',

  }

}));