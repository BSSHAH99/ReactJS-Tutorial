import React from 'react'

export default function CustomButton({ children, ...otherProps }) {
    return (
        <>
            <br />
            <div>
                <button className="btn btn-primary" {...otherProps}>{children}</button>
            </div>
        </>
    )
}
