import React from 'react'

const TestFormInput = (props) => {
    const { label, id, name, onChange, ...inputpprops } = props;

  return (
    <div>
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <br />
      <input
        {...inputpprops}
        onChange={onChange}
        name={name}
        className="form-control"
      />
      <br />
    </div>
  </div>
  )
}

export default TestFormInput
