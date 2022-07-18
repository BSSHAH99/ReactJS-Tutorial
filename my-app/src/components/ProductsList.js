import React from "react";
import { Link, useOutletContext } from "react-router-dom";
function ProductsList({ newProduct }) {
  let data = useOutletContext();
  // data = newProduct ? newProduct : null;
  if (newProduct) {
    data = newProduct;
  }
  return (
    <React.Fragment>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((item) => {
            return (
              <div
                className="col mx-auto"
                style={{ maxWidth: "20rem" }}
                key={item.id}
              >
                <div className="card my-4" style={{ width: "18rem" }}>
                  <img
                    height={300}
                    src={item.image}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    {/* <p className="card-text">{item.description}</p> */}
                    <h6 className="card-title">USD :${item.price}</h6>
                    <Link
                      to={"/products/" + item.id}
                      className="btn btn-primary"
                    >
                      Product Detail
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductsList;
