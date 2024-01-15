import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: 0,
    category: "",
    company: "",
  });

  const user = JSON.parse(localStorage.getItem("user"));
  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (
      !productDetails.category ||
      !productDetails.name ||
      !productDetails.price ||
      !productDetails.company
    ) {
      //add toast notification
      console.error("Invalid data");
    } else {
      const res = await fetch("http://localhost:5000/add-product", {
        method: "POST",
        body: JSON.stringify({ ...productDetails, userId: user._id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data._id) {
        navigate("/products");
      } else {
        console.log("error while adding product");
      }
    }
  };
  return (
    <div className="signup-container">
      <h1>Add Product</h1>
      <form method="POST" onSubmit={(e) => handleAddProduct(e)}>
        <div>
          <label htmlFor="prodName">Name</label>
          <input
            type="text"
            placeholder="Enter product's name"
            name="prodName"
            id="prodName"
            value={productDetails.name}
            onChange={(e) =>
              setProductDetails((prev) => {
                return { ...prev, name: e.target.value };
              })
            }
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            placeholder="Enter product's price"
            name="price"
            id="price"
            value={productDetails.price}
            onChange={(e) =>
              setProductDetails((prev) => {
                return { ...prev, price: e.target.value };
              })
            }
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            placeholder="Enter product's category"
            name="category"
            id="category"
            value={productDetails.category}
            onChange={(e) =>
              setProductDetails((prev) => {
                return { ...prev, category: e.target.value };
              })
            }
          />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            placeholder="Enter product's company"
            name="company"
            id="company"
            value={productDetails.company}
            onChange={(e) =>
              setProductDetails((prev) => {
                return { ...prev, company: e.target.value };
              })
            }
          />
        </div>
        <button type="submit">Add product</button>
      </form>
    </div>
  );
};

export default AddProduct;
