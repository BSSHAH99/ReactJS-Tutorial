import React from 'react'

export default ({ showError, errorMessage, isRequired, handleChange, pattern, ...otherProps }) => {
    return (
        <div>
            <br />
            <input className="form-control"
                {...otherProps}
                required={isRequired}
                onChange={(e) => handleChange(e, pattern)}
            ></input>
            <br />
            {
                showError && <div className="alert-danger" role="alert">
                    {errorMessage}
                </div>
            }
        </div >
    )
}









