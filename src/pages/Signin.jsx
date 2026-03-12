import React, { useState } from "react";
import Lottie from "lottie-react";
import loading from "../assets/loading.json";

function Signin() {
  const data = {
    name: "",
    password: "",
  };

  const [log, setlog] = useState(data);

  const setval = (e) => {
    setlog({
      ...log,
      [e.target.name]: e.target.value,
    });
  };

  const sub = (e) => {
    e.preventDefault();
    console.log({
      name: log.name,
      password: log.password,
    });
  };

  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#667eea,#764ba2)",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          width: "320px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Sign In 
        </h2>
        <div style={{ width: 200 }}>
          <Lottie animationData={loading} loop={true} />
        </div>

        <form
          onSubmit={sub}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            onChange={setval}
            value={log.name}
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              outline: "none",
              fontSize: "14px",
            }}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            onChange={setval}
            value={log.password}
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              outline: "none",
              fontSize: "14px",
            }}
          />
          <p style={{ color: "#555", fontSize: "14px", textAlign: "left" }}>
            Password: {log.password}
          </p>

          <button
            type="submit"
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "none",
              background: "linear-gradient(135deg,#667eea,#764ba2)",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
