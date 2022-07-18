import React from 'react'

const TestDropdown = (props) => {
    const { label, id, name, onChange, ...inputpprops } = props;

    return (
        <div>
            <div className="mb-3">
                <div className="dropdown">
                    <a className="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item">Action</a></li>
                        <li><a className="dropdown-item">Another action</a></li>
                        <li><a className="dropdown-item">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TestDropdown
