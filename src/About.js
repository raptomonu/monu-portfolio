import React, { Component } from "react";
import { isMobile } from "./Utility";
const Potrait = "/images/Potrait.jpg";

const webStyles = {
  containerStyle: {
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    flex: 1,
    paddingLeft: 100,
  },

  imageStyle: {
    height: 200,
    width: 200,
    borderRadius: 8,
  },
  descriptionStyle: {
    color: "white",
    paddingLeft: 100,
    fontSize: 18,
    lineHeight: "30px",
  },
};
const mobileStyle = {
  containerStyle: {
    flexDirection: "column",
    alignItems: "center",
    display: "flex",
    flex: 1,
    overflow: "hidden",
    paddingTop: 30,
    // flexWrap: "wrap",
  },

  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },
  descriptionStyle: {
    color: "white",
    textAlign: "center",
    paddingTop: 20,
    fontSize: 18,
    lineHeight: "30px",
  },
};

const styles = isMobile ? mobileStyle : webStyles;
const { containerStyle, descriptionStyle, imageStyle } = styles;
class About extends Component {
  render() {
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          paddingLeft: isMobile ? 16 : 50,
          paddingRight: isMobile ? 16 : 50,
        }}
      >
        <div
          style={{
            alignSelf: "center",
            paddingTop: 70,
            borderBottom: "solid #2F8A95 3px",
            paddingBottom: 2,
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: 25,
              fontFamily: "sans-serif",
              fontWeight: 500,
              color: "white",
            }}
          >
            About
          </div>
        </div>
        <div style={containerStyle}>
          <img src={Potrait} alt="" draggable={false} style={imageStyle} />
          <div style={descriptionStyle}>
            My name is Monu. I am Mobile app developer for Daffodil Software
            Pvt. Ltd. in Hisar Haryana, India. Extremely motivated to constantly
            develop my skills and grow professionally. I strictly believe in
            project based learning approach. I have 2 years of industrial
            experience inbuilding and maintaining responsive and optimized
            cross-platform mobile applications.
          </div>
        </div>
      </div>
    );
  }
}

export default About;
