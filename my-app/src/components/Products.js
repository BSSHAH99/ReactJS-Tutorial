import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "./Services/Instances";

function Products() {
  const [data, setdata] = useState([]);
  const [categories, setcategories] = useState([]);
  const allProduct = () => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     // console.log(json);
    //     setdata(json);
    //   });

    axios
      .get("/products")
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((error) => {
        console.log("this is product", error);
      });
  };

  useEffect(() => {
    allProduct();
    // fetch("https://fakestoreapi.com/products/categories")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setcategories(json);
    //   });

    axios
      .get("/products/categories")
      .then((res) => {
        console.log(res.data);
        setcategories(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getProductByCategory = (item) => {
    // fetch("https://fakestoreapi.com/products/category/" + item)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setdata(json);
    //   });
    axios
      .get("/products/category/" + item)
      .then((res) => {
        // console.log(res.data);
        setdata(res.data);
      })
      .catch((error) => {
        console.log("this is get catagory", error);
      });
  };
  return (
    <>
      <nav>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Link
            onClick={() => allProduct()}
            to="/products"
            className="btn btn-primary my-3 mx-3"
          >
            All Products
          </Link>
          <div className="dropdown  my-3 mx-3">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categories
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                {categories.map((item) => {
                  return (
                    <Link
                      onClick={() => getProductByCategory(item)}
                      key={item}
                      className="dropdown-item"
                      to="/products"
                    >
                      {item}
                    </Link>
                  );
                })}
              </li>
            </ul>
          </div>
          {/* <Link to="featured" className="btn btn-primary my-3 mx-3">
            Featured
          </Link> */}
          <Link to="new" className="btn btn-primary my-3 mx-3">
            New Products
          </Link>
        </div>
      </nav>
      <Outlet context={data} />
    </>
  );
}

export default Products;
