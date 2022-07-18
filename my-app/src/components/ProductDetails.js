import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "./Services/Instances";

function ProductDetails() {
  const id = useParams();

  const [data, setdata] = useState([]);
  useEffect(() => {
    // fetch("https://fakestoreapi.com/products/" + id.proid)
    //   // fetch(`https://fakestoreapi.com/products/${id.proid}`)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setdata(json);
    //   });

    axios
      .get("/products/" + id.proid)
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((error) => {
        console.log("this is product", error);
      });
  }, [id.proid]);
  return (
    <React.Fragment>
      <div>
        <div className="card mb-3" style={{ maxwidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                height={500}
                width={500}
                src={data.image}
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <br />
                <h3 className="card-title">{data.title}</h3>
                <br />
                <label className="form-label">Price</label>
                <h5 className="card-title">USD :${data.price}</h5>
                <br />
                <label className="form-label">Category</label>
                <h5 className="card-title">{data.category}</h5>
                <br />
                <label className="form-label">Description</label>
                <p className="card-text">{data.description}</p>

                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductDetails;
