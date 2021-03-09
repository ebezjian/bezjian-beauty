import React from "react";
import Banner from './Banner/Banner';
import { Parallax,} from 'react-parallax';
import Splash from './Splash/SplashPage';


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  
};
const insideStyles = {
  // background: "white",
  padding: 0,
  position: "absolute",
  top: "50%",
  left: "50%",
  
  transform: "translate(-50%,-50%)"
};

const image2 =
"https://images.unsplash.com/photo-1484311969987-0a20cd9afedc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const Home = () => (
  
  
<div>
  <div>
    <Banner/>
  </div>
  <div>
    <Splash/>
  </div>
  <div style={styles}>
    <h2>| | |</h2>
    <Parallax bgImage={image2} strength={-100}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Reverse direction</div>
      </div>
    </Parallax> 
  </div>

  </div>
  )

export default Home