import React from "react";

function Blog() {

  const pageStyle = {
    padding: "40px",
    fontFamily: "Arial"
  };

  const container = {
    display: "flex",
    gap: "30px",
    flexWrap: "wrap"
  };

  const blogArea = {
    flex: "3"
  };

  const card = {
    background: "#f4f4f4",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "6px"
  };

  const button = {
    marginTop: "10px",
    padding: "8px 15px",
    border: "none",
    background: "#4facfe",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer"
  };

  const sidebar = {
    flex: "1",
    background: "#fafafa",
    padding: "20px",
    borderRadius: "8px",
    height: "fit-content",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
  };

  return (
    <div style={pageStyle}>

      {/* PAGE HEADER */}
      <h1 style={{textAlign:"center"}}>Our Blog</h1>
      <p style={{textAlign:"center"}}>
        Read our latest articles and updates
      </p>

      <div style={container}>

        {/* BLOG POSTS */}
        <div style={blogArea}>

          <div style={card}>
            <img
              style={imageStyle}
              src="https://via.placeholder.com/600x250"
              alt="blog"
            />
            <h2>How to Learn React Faster</h2>
            <p>
              React is one of the most popular frontend libraries.
              In this article we discuss tips to learn it faster.
            </p>
            <button style={button}>Read More</button>
          </div>

          <div style={card}>
            <img
              style={imageStyle}
              src="https://via.placeholder.com/600x250"
              alt="blog"
            />
            <h2>Top 10 JavaScript Tricks</h2>
            <p>
              JavaScript has many hidden tricks that can improve your
              coding productivity.
            </p>
            <button style={button}>Read More</button>
          </div>

          <div style={card}>
            <img
              style={imageStyle}
              src="https://via.placeholder.com/600x250"
              alt="blog"
            />
            <h2>Why Developers Love React</h2>
            <p>
              React helps developers build reusable UI components and
              scalable applications.
            </p>
            <button style={button}>Read More</button>
          </div>

        </div>

        {/* SIDEBAR */}
        <div style={sidebar}>
          <h3>Categories</h3>
          <p>📌 React</p>
          <p>📌 JavaScript</p>
          <p>📌 Web Development</p>

          <h3 style={{marginTop:"20px"}}>Recent Posts</h3>
          <p>How to Learn React</p>
          <p>Understanding JavaScript</p>
          <p>Modern Web Design</p>
        </div>

      </div>

    </div>
  );
}

export default Blog;