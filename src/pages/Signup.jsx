import React, { useState } from 'react'

function Signup() {

  const data = {
    name: "",
    email: "",
    password: "",
  }

  const [log, setlog] = useState(data)

  const setval = (e) => {
    setlog({
      ...log,
      [e.target.name]: e.target.value
    })
  }

  const sub = (e) => {
    e.preventDefault();
    alert(`The name is ${log.name} and password is ${log.password} and email ${log.email} is submitted`)
  }

  return (
    <div style={{
      height: "62vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg,#4facfe,#00f2fe)",
      fontFamily: "Arial"
    }}>

      <div style={{
        background: "white",
        padding: "35px",
        borderRadius: "12px",
        width: "340px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        textAlign: "center"
      }}>

        <h2 style={{
          marginBottom: "20px",
          color: "#333"
        }}>
          Sign Up
        </h2>

        <form onSubmit={sub} style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}>

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
              fontSize: "14px"
            }}
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            onChange={setval}
            value={log.email}
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              fontSize: "14px"
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
              fontSize: "14px"
            }}
          />

          <button
            type="submit"
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "none",
              background: "linear-gradient(135deg,#4facfe,#00f2fe)",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Register
          </button>

        </form>

      </div>

    </div>
  )
}

export default Signup