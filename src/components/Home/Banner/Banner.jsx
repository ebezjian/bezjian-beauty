import {Container, Button, Grid} from "@material-ui/core";
import logo from '../../../assets/Bezjian.png';
import makeup from '../../../assets/makeupad.gif';
import "./styles.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} className="logo">
            <img src={logo} alt="Bezjian-beauty"/>
          </Grid>
          <Grid className="brand" item sm={6}>
            <img src={makeup} alt="Colorful-makeup" />
          </Grid>
            <Button className="shopping-button" href="/products">
              Start Shopping!
            </Button>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;