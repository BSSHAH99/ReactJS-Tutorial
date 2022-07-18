import React from 'react'

const TestRadioInput = (props) => {
    const { label, id, name, onChange, value, checked, ...inputpprops } = props;
    // console.log('value :>> ', inputpprops, );
    // console.log('checked :>> ', checked);
    return (
        <div>
            <div className="mb-3">
                <div className="form-check">
                    <input
                        {...inputpprops}
                        className="form-check-input"
                        name={name}
                        onChange={onChange}
                        value={label}
                        checked={checked}
                    />
                    <label className="form-check-label">
                        {label}
                    </label>
                </div>
            </div>
        </div>
    )
}

export default TestRadioInput
