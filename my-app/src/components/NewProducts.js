import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import axios from "./Services/Instances";

function NewProducts() {
  const [newProduct, steNewProduct] = useState();

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products?sort=desc")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     steNewProduct(json);
    //   });

    axios
      .get("/products?sort=desc")
      .then((res) => {
        console.log(res.data);
        steNewProduct(res.data);
      })
      .catch((error) => {
        console.log("this is product", error);
      });
  }, []);
  return (
    <div>
      <ProductsList newProduct={newProduct} />
    </div>
  );
}

export default NewProducts;
