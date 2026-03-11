import React from "react";

function Contact() {

  const pageStyle = {
    padding: "40px",
    fontFamily: "Arial"
  };

  const formContainer = {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    background: "#f4f4f4",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc"
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#4facfe",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };

  const infoSection = {
    marginTop: "50px",
    textAlign: "center"
  };

  const faqSection = {
    marginTop: "60px",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto"
  };

  return (
    <div style={pageStyle}>

      {/* HEADER */}
      <h1 style={{textAlign:"center"}}>Contact Us</h1>
      <p style={{textAlign:"center"}}>
        We'd love to hear from you! Send us a message.
      </p>

      {/* CONTACT FORM */}
      <div style={formContainer}>
        <input style={inputStyle} type="text" placeholder="Your Name" />
        <input style={inputStyle} type="email" placeholder="Your Email" />
        <textarea
          style={{...inputStyle, height:"100px"}}
          placeholder="Your Message"
        ></textarea>

        <button style={buttonStyle}>Send Message</button>
      </div>

      {/* CONTACT INFO */}
      <div style={infoSection}>
        <h2>Our Office</h2>
        <p>📍 123 Web Street, Tech City</p>
        <p>📞 +91 9876543210</p>
        <p>✉️ support@example.com</p>
      </div>

      {/* MAP SECTION */}
      <div style={{marginTop:"40px", textAlign:"center"}}>
        <h2>Find Us</h2>
        <img
          src="https://via.placeholder.com/600x250"
          alt="map"
          style={{width:"80%", borderRadius:"8px"}}
        />
      </div>

      {/* FAQ */}
      <div style={faqSection}>
        <h2>Frequently Asked Questions</h2>

        <h4>How long does support take?</h4>
        <p>Usually within 24 hours.</p>

        <h4>Do you offer refunds?</h4>
        <p>Yes, within the first 7 days of purchase.</p>

        <h4>Where are you located?</h4>
        <p>We operate globally with our main office in Tech City.</p>
      </div>

    </div>
  );
}

export default Contact;