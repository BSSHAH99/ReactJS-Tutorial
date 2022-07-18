import React from 'react'

const TestFormCheckbox = (props) => {
    const { label, id, name, onChange, ...inputpprops } = props;

    return (
        <div className="form-check">
            <input
                {...inputpprops} className="form-check-input" value={label} />
            {/* <label className="form-check-label">
                {name}
            </label> */}
        </div>
    )
}

export default TestFormCheckbox
