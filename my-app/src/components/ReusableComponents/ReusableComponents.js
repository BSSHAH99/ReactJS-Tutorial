import React from "react";
import TestButton from "./Button/TestButton";

function ReusableComponents() {
  return (
    <div>
      <div className="container my-3">
        <div className="container">
          <TestButton>btn</TestButton>
        </div>
      </div>
    </div>
  );
}

export default ReusableComponents;
