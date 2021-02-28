import React from "react";

import { Parallax } from "react-parallax";


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const image1 =
  "https://cdn.discordapp.com/attachments/537816642122547212/815641335440605234/banner1.jpg";
  const image2 =
  "https://cdn.discordapp.com/attachments/537816642122547212/815641411918889051/logo2.png";

const Home = () => (
  <div style={styles}>
    
    <Parallax bgImage={image1} strength={500}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>{image2}</div>
      </div>
    </Parallax>
  </div>)

export default Home