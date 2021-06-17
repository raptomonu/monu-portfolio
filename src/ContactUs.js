import React, { Component } from "react";

class ContactUs extends Component {
  render() {
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          paddingLeft: 50,
          paddingRight: 50,
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
            Contact
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
