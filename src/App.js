//http://findmatthew.com/
//https://abhinavankur.com/
import React from "react";

import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import "./main.css";
const WideImage = "/images/wide2.jpg";

const durationFn = function (deltaTop) {
  return deltaTop;
};

export default class App extends React.Component {
  stickyOffset = window.innerHeight;
  componentDidMount() {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });
  }
  scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  scrollTo(offset) {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: offset,
    });
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  onScroll = () => {
    var header = document.getElementById("myHeader");

    var sticky = header.offsetTop;
    console.log(">>>>>>>>", sticky, window.pageYOffset);

    if (this.stickyOffset < window.pageYOffset) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };
  render() {
    const height = window.innerHeight;
    window.onscroll = () => this.onScroll();
    return (
      <div
        style={{
          flex: 1,
          backgroundColor: "yellow",
        }}
      >
        <div
          style={{
            height: height,
            backgroundColor: "grey",
            alignItems: "center",

            display: "flex",
            // flexDirection: "row",
            backgroundImage: `url(${WideImage})`,
            backgroundSize: "cover",
            paddingLeft: window.innerWidth * 0.1,
          }}
        >
          <div>
            <div style={{ fontSize: 40, paddingBottom: 10 }}>
              Hello,I am<span style={{ color: "red" }}> M</span>
              <span style={{ color: "white" }}>onu</span>
            </div>
            <div style={{ color: "black", fontSize: 20, paddingBottom: 10 }}>
              I'm Mobile app developer
            </div>
            <div
              style={{
                backgroundColor: "#2F8A95",
                // backgroundColor: "grey",
                borderRadius: 4,
                cursor: "pointer",
                width: 150,
                // border: "solid #000 1px",
              }}
            >
              <Link
                activeClass="active"
                className="test1"
                to="test1"
                spy={true}
                smooth={true}
                duration={500}
                offset={-40}
              >
                <div
                  style={{
                    // borderColor: "black",
                    // borderWidth: 2,
                    color: "white",
                    padding: 10,
                    textAlign: "center",
                  }}
                >
                  View my work
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="header" id="myHeader">
          this is header
        </div>
        <Element className="element" name="test1">
          <div style={{ height, backgroundColor: "goldenrod" }}>10</div>
        </Element>
        {[1, 2, 3, 4].map((value) => {
          return (
            <div
              style={{
                height: height,
                width: "100%",
                backgroundColor: "blue",
              }}
            >
              {value}
            </div>
          );
        })}
      </div>
    );
  }
}
