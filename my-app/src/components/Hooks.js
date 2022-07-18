import React, { useState } from "react";

function Hooks() {
  const incrementCount = 0;
  const [count, setCount] = useState(incrementCount);
  const [name, setName] = useState({ firstNmame: "", lastName: "" });
  const [items, setItems] = useState([]);

  const IncrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prvecount) => prvecount + 1);
    }
  };
  const addItems = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
       <div className="container my-3">
    <div className="container">
      <h3> useState with previous state</h3>
      <h2>{count}</h2>
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          setCount(incrementCount);
        }}
      >
        Reset
      </button>
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          setCount((prvecount) => prvecount + 1);
        }}
      >
        Increment
      </button>
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          setCount((prvecount) => prvecount - 1);
        }}
      >
        Decrement
      </button>
      <button className="btn btn-primary mx-2" onClick={IncrementFive}>
        Increment 5
      </button>
      <hr />
      <h3>useState with object</h3>
      <input
        className="form-control mx-2 my-2"
        type="text"
        value={name.firstNmame}
        onChange={(e) => setName({ ...name, firstNmame: e.target.value })}
      />
      <input
        className="form-control mx-2 my-2"
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />

      <h5>My First Nmae is {name.firstNmame}</h5>
      <h5>My Last Nmae is {name.lastName}</h5>
      <h5>{JSON.stringify(name)}</h5>

      <hr />
      <h3>useState with array</h3>
      <button className="btn btn-primary mx-2" onClick={addItems}>
        Add Number
      </button>
      <ul>
        {items.map((items) => (
          <li key={items.id}>{items.value}</li>
        ))}
      </ul>
      </div>
      </div>
    </div>
  );
}

export default Hooks;
