import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "#282c34",
    color: "white",
    padding: "30px 20px",
    fontFamily: "Arial"
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap"
  };

  const sectionStyle = {
    margin: "10px"
  };

  const linkStyle = {
    display: "block",
    color: "white",
    textDecoration: "none",
    margin: "5px 0",
    fontSize: "14px"
  };

  const bottomStyle = {
    textAlign: "center",
    marginTop: "20px",
    borderTop: "1px solid gray",
    paddingTop: "10px",
    fontSize: "14px"
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        
        <div style={sectionStyle}>
          <h3>MySite</h3>
          <p>Simple React demo website.</p>
        </div>

        <div style={sectionStyle}>
          <h4>Quick Links</h4>
          <a href="#" style={linkStyle}>Home</a>
          <a href="#" style={linkStyle}>Products</a>
          <a href="#" style={linkStyle}>Contact</a>
          <a href="#" style={linkStyle}>Blog</a>
        </div>

        <div style={sectionStyle}>
          <h4>Follow Us</h4>
          <a href="#" style={linkStyle}>Facebook</a>
          <a href="#" style={linkStyle}>Instagram</a>
          <a href="#" style={linkStyle}>Twitter</a>
        </div>

      </div>

      <div style={bottomStyle}>
        © 2026 MySite. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;