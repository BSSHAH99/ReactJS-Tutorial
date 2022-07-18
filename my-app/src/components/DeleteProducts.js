import React, { useState } from "react";
import axios from "./Services/Instances";

function DeleteProducts() {
  const [id, setId] = useState("");
  const deleteProduct = () => {
    // fetch("https://fakestoreapi.com/products/" + id, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((json) => console.log(json));

    axios
      .delete("/products/" + id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="container my-3">
        <div className="container">
          <h1 className="my-3 ">Delete Product</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              deleteProduct();
            }}
          >
            <div className="mb-3">
              <label className="form-label">Product Id</label>
              <input
                type="number"
                className="form-control"
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                }}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Delete Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default DeleteProducts;
