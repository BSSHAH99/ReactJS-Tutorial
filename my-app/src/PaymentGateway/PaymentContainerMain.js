import React from "react";
import { useState } from "react";
import StripeContainer from "./StripeContainer";

const PaymentContainerMain = () => {
  const [showitem, setShowItem] = useState(false);
  return (
    <>
      <div className="container my-3">
        <div className="container">
          {showitem ? (
            <StripeContainer />
          ) : (
            <>
        
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <button
                  type="submit"
                  onClick={() => {
                    setShowItem(true);
                  }}
                  className="btn btn-primary mb-3"
                >
                  Buy Now
                </button>
              </div>{" "}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentContainerMain;
