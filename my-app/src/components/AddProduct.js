import React, { useState } from "react";
import axios from "./Services/Instances";
import { apiCalling } from "./apiCalling";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const addProduct = () => {
    // fetch("https://fakestoreapi.com/products", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     title: title,
    //     price: price,
    //     description: description,
    //     image: image,
    //     category: category,
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((json) => console.log(json));

    // apiCalling("products", "post", {
    //   title: title,
    //   price: price,
    //   description: description,
    //   image: image,
    //   category: category,
    // }).then((data) => {
    //   console.log(data);
    // });

    axios
      .post("/products", {
        title: title,
        price: price,
        description: description,
        image: image,
        category: category,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // setTitle("");
  };

  return (
    <>
      <div className="container my-3">
        <div className="container">
          <h1 className="my-3 ">Add Product</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addProduct();
            }}
          >
            <div className="mb-3">
              <label className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Image url</label>
              <input
                type="text"
                className="form-control"
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Category</label>
              <input
                type="text"
                className="form-control"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
