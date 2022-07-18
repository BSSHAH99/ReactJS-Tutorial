import axios from "axios";
import React, { useEffect, useState } from "react";

const Env = () => {
  useEffect(() => {
    news();
  }, []);

  const [data, setdata] = useState([]);
  function news() {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=apple&from=2022-06-13&to=2022-06-13&sortBy=popularity&apiKey=${process.env.REACT_APP_UNSPLASH_KEY}`
      )
      .then((res) => {
        console.log(res.data.articles);
        setdata(res.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  console.log(process.env);
  console.log("this is data", data);

  return (
    <div>
      <div className="container my-3 mx-3">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {data.map((items, index) => {
              return (
                <div
                  key={index}
                  className="card mx-auto my-3 mx-3"
                  style={{ maxWidth: "20rem" }}
                >
                  <img
                    src={items.urlToImage}
                    className="card-img-top"
                    // alt="..."
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">{items.title}</h5>
                    <p className="card-text">{items.author}</p>
                    <ul className="list-group list-group-flush">
                      {/* <li className="list-group-item">{items.content}</li> */}
                      <li className="list-group-item">{items.description}</li>
                    </ul>
                    <a href={items.url} className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Env;

// REACT_APP_UNSPLASH_KEY= 69cad6b13b9d464d92369d47c8f4ac9c
