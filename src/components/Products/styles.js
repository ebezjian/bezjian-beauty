import { makeStyles } from '@material-ui/core/styles';
import Background from '../../assets/wallpaper.png';
export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    backgroundImage: `url(${Background})`
  },
  root: {
    flexGrow: 1,
    underline: 'none',
  },
}));