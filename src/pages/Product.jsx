import React from "react";

function Product() {

  const page = {
    padding: "40px",
    fontFamily: "Arial"
  };

  const hero = {
    textAlign: "center",
    padding: "40px",
    background: "linear-gradient(to right,#4facfe,#00f2fe)",
    color: "white",
    borderRadius: "8px"
  };

  const grid = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    marginTop: "40px"
  };

  const card = {
    width: "220px",
    background: "#f4f4f4",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
  };

  const img = {
    width: "100%",
    borderRadius: "6px"
  };

  const btn = {
    padding: "8px 15px",
    border: "none",
    background: "#4facfe",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px"
  };

  const reviewSection = {
    marginTop: "60px",
    textAlign: "center"
  };

  const reviewCard = {
    background: "#fafafa",
    padding: "20px",
    margin: "15px auto",
    maxWidth: "500px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
  };

  return (
    <div style={page}>

      {/* HERO */}
      <div style={hero}>
        <h1>Our Products</h1>
        <p>Explore our latest collection</p>
      </div>

      {/* PRODUCT GRID */}
      <div style={grid}>

        <div style={card}>
          <img style={img} src="https://via.placeholder.com/200" alt="" />
          <h3>Product 1</h3>
          <p>$29.99</p>
          <button style={btn}>Buy Now</button>
        </div>

        <div style={card}>
          <img style={img} src="https://via.placeholder.com/200" alt="" />
          <h3>Product 2</h3>
          <p>$39.99</p>
          <button style={btn}>Buy Now</button>
        </div>

        <div style={card}>
          <img style={img} src="https://via.placeholder.com/200" alt="" />
          <h3>Product 3</h3>
          <p>$49.99</p>
          <button style={btn}>Buy Now</button>
        </div>

        <div style={card}>
          <img style={img} src="https://via.placeholder.com/200" alt="" />
          <h3>Product 4</h3>
          <p>$59.99</p>
          <button style={btn}>Buy Now</button>
        </div>

        <div style={card}>
          <img style={img} src="https://via.placeholder.com/200" alt="" />
          <h3>Product 5</h3>
          <p>$69.99</p>
          <button style={btn}>Buy Now</button>
        </div>

        <div style={card}>
          <img style={img} src="https://via.placeholder.com/200" alt="" />
          <h3>Product 6</h3>
          <p>$79.99</p>
          <button style={btn}>Buy Now</button>
        </div>

      </div>

      {/* FEATURED PRODUCT */}
      <div style={{marginTop:"60px", textAlign:"center"}}>
        <h2>Featured Product</h2>
        <img
          src="https://via.placeholder.com/500x250"
          alt=""
          style={{width:"70%", borderRadius:"8px"}}
        />
        <p style={{maxWidth:"600px", margin:"20px auto"}}>
          Our featured product is built with premium quality materials
          and designed for the best performance.
        </p>
      </div>

      {/* REVIEWS */}
      <div style={reviewSection}>
        <h2>Customer Reviews</h2>

        <div style={reviewCard}>
          ⭐⭐⭐⭐⭐
          <p>Great product quality and fast delivery.</p>
          <strong>- Rahul</strong>
        </div>

        <div style={reviewCard}>
          ⭐⭐⭐⭐
          <p>I really like the design and performance.</p>
          <strong>- Anjali</strong>
        </div>

      </div>

    </div>
  );
}

export default Product;