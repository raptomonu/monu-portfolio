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
import About from "./About";
import ContactUs from "./ContactUs";
import "./main.css";
import Portfolio from "./Portfolio";
import { isMobile } from "./Utility";
const WideImage = "/images/wide2.jpg";
const MobileWide = "/images/MobileWide.jpg";


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
    console.log(">>>>>>>>>>>", height, window.innerWidth);
    window.onscroll = () => this.onScroll();
    return (
      <div
        style={{
          // flex: 1,
          width: window.innerWidth,
          height: height,
          // overflow: "auto",
        }}
      >
        <Element className="element" name="home">
          <div
            style={{
              height: height,
              backgroundColor: "grey",
              alignItems: isMobile ? "flex-end" : "center",
              display: "flex",
              // flexDirection: "row",
              backgroundImage: `url(${isMobile ? MobileWide : WideImage})`,
              backgroundSize: "cover",
              paddingLeft: window.innerWidth * 0.1,
            }}
          >
            <div
              style={{
                marginBottom: isMobile ? 100 : 0,
              }}
            >
              <div style={{ fontSize: 40, paddingBottom: 10 }}>
                Hello,I am<span style={{ color: "red" }}> M</span>
                <span style={{ color: isMobile ? "black" : "white" }}>onu</span>
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
                  className="about"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-40}
                >
                  <div
                    style={{
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
        </Element>
        <div className="header" id="myHeader">
          {[
            { title: "Home", name: "home" },
            { title: "About", name: "about" },
            { title: "Portfolio", name: "portfolio" },
            { title: "Contact", name: "contactus" },
          ].map(({ title, name }) => {
            return (
              <Link
                activeClass="active"
                className={name}
                to={name}
                spy={true}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                <div
                  style={{
                    color: "white",
                    padding: 10,
                    textAlign: "center",
                  }}
                >
                  {title}
                </div>
              </Link>
            );
          })}
        </div>
        <Element className="element" name="about">
          <div
            style={{
              height,
              width: "100%",
              display: "flex",
              backgroundColor: "#24283D",
            }}
          >
            <About />
          </div>
        </Element>
        <Element className="element" name="portfolio">
          <div
            style={{
              height: height,
              width: "100%",
              display: "flex",
              backgroundColor: "#24283D",
            }}
          >
            <Portfolio />
          </div>
        </Element>
        <Element className="element" name="contactus">
          <div
            style={{
              height: height,
              width: "100%",
              display: "flex",
              backgroundColor: "#24283D",
            }}
          >
            <ContactUs />
          </div>
        </Element>
      </div>
    );
  }
}
