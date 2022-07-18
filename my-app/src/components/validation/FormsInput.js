import React, { useState } from "react";

function FormsInput(props) {
  const { label, id, name, onChange, error, ...inputpprops } = props;
  const [focused, setfocused] = useState(false);
  const handleFocus = (e) => {
    setfocused(true);
  };
  return (
    <div>
      <div className="mb-3">
        <label className="form-label">{label}</label>
        <br />
        <input
          {...inputpprops}
          onChange={onChange}
          onBlur={handleFocus}
          name={name}
          focused={focused.toString()}
          className="form-control"
        />
        <br />
        <p>{error[name]}</p>
      </div>
    </div>
  );
}

export default FormsInput;
