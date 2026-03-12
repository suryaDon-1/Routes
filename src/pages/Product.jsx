import axios from "axios";
import React, { useEffect, useState } from "react";
import "../pages/product.css"

function Product() {
  const [count, setcount] = useState(0);
  // use effect hook
  useEffect(
    // function of use effect
    () => {
      console.log("run");
    }, // ddependecies => run function every time when dependices value changes
    [count],
  );

  const [product, setproduct] = useState([]);
  useEffect(() => {
    const getproducdata = async () => {
      try {
        const productData = await axios.get("https://fakestoreapi.com/products");
        console.log(productData.data);
        setproduct(productData.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getproducdata();
  }, []);

  const page = {
    padding: "40px",
    fontFamily: "Arial",
  };

  const hero = {
    textAlign: "center",
    padding: "40px",
    background: "linear-gradient(to right,#4facfe,#00f2fe)",
    color: "white",
    borderRadius: "8px",
  };


  const reviewSection = {
    marginTop: "60px",
    textAlign: "center",
  };

  const reviewCard = {
    background: "#fafafa",
    padding: "20px",
    margin: "15px auto",
    maxWidth: "500px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  };

  return (
    <div style={page}>
      <h1>{count}</h1>
      <button
        onClick={() => setcount((prev) => prev + 1)}
        style={{
          padding: "10px 20px",
          fontWeight: "bold",
          backgroundColor: "skyblue",
          color: "white",
        }}
      >
        Clickk
      </button>
      {/* HERO */}
      <div style={hero}>
        <h1>Our Products</h1>
        <p>Explore our latest collection</p>
      </div>

      {/* PRODUCT GRID */}
       <div className="container">
      {product.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p className="desc">{item.description.substring(0, 80)}...</p>
          <div className="price-rating">
            <span className="price">${item.price}</span>
            <span className="rating">⭐ {item.rating.rate}</span>
          </div>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>

      {/* FEATURED PRODUCT */}
      <div style={{ marginTop: "60px", textAlign: "center" }}>
        <h2>Featured Product</h2>
        {/* <img
          src="https://via.placeholder.com/500x250"
          alt=""
          style={{width:"70%", borderRadius:"8px"}}
        /> */}
        <p style={{ maxWidth: "600px", margin: "20px auto" }}>
          Our featured product is built with premium quality materials and
          designed for the best performance.
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
