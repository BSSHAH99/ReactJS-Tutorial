import React, { useState } from "react";

function GoogleApi() {
  const [search, setSearch] = useState("");

  const searchOnGoogle = () => {
    //www.google.com/search?q=bhvaik+shah&oq=bhvaik+shah&aqs=chrome..69i57.3112j0j1&sourceid=chrome&ie=UTF-8

    fetch("https://www.google.com/search?q=" + search, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(setSearch({ results: res.items }));
      });
  };
  return (
    <>
      <div className="mb-3">
        <label className="form-label">Search</label>
        <input
          type="text"
          className="form-control"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary mx-3 my-3"
        onClick={() => searchOnGoogle()}
      >
        Search
      </button>
    </>
  );
}

export default GoogleApi;
