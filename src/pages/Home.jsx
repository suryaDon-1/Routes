import React from "react";

function Home() {

  const heroStyle = {
    background: "linear-gradient(to right, #4facfe, #00f2fe)",
    color: "white",
    padding: "80px 20px",
    textAlign: "center"
  };

  const buttonStyle = {
    padding: "12px 25px",
    backgroundColor: "white",
    color: "#333",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
    fontSize: "16px"
  };

  const featureSection = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "40px",
    flexWrap: "wrap"
  };

  const cardStyle = {
    backgroundColor: "#f4f4f4",
    padding: "25px",
    width: "250px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
  };

  return (
    <div>

      {/* HERO SECTION */}
      <section style={heroStyle}>
        <h1>Welcome to My Website</h1>
        <p>Build modern websites with React 🚀</p>
        <button style={buttonStyle}>Get Started</button>
      </section>

      {/* FEATURES */}
      <section style={featureSection}>

        <div style={cardStyle}>
          <h3>Fast</h3>
          <p>React makes your website super fast.</p>
        </div>

        <div style={cardStyle}>
          <h3>Modern</h3>
          <p>Build modern UI with reusable components.</p>
        </div>

        <div style={cardStyle}>
          <h3>Scalable</h3>
          <p>Create large applications easily.</p>
        </div>

      </section>

    </div>
  );
}

export default Home;