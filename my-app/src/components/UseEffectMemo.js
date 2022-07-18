import React, { useMemo, useEffect, useState } from "react";

export default function UseEffectMemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("bsshah");

  useEffect(() => {
    console.log("useEffect Calling");
    console.log(Math.random());
  }, []);

  const noRender = useMemo(() => {
    console.log("useMemo Calling");
    return (
      <div>
        <h6 style={{ color: "red" }}>This Is Count {count}</h6>
        <h6 style={{ color: "red" }}>This Is {name}</h6>
      </div>
    );
  }, []);
  return (
    <div>
      <div className="container my-3">
        <div className="container">
          <div>
            <h3>useEffect Vr useMemo</h3>
            {noRender}
            <h6>This Is Count {count}</h6>
            <h6>This Is Data {name}</h6>
            <button
              className="btn btn-primary mx-2"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Update Count
            </button>
            <button
              className="btn btn-primary mx-2"
              onClick={() => {
                setName("bhvaik shah");
              }}
            >
              Update Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
