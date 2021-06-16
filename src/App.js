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
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* <h3>Hello,I am Monu</h3>
          <h3>i'm React-Native Developer</h3> */}
          <h1>this this</h1>
          <Link
            activeClass="active"
            className="test1"
            to="test1"
            spy={true}
            smooth={true}
            duration={500}
            offset={-40}
          >
            <div>View my work</div>
          </Link>
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
