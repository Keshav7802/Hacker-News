import React from 'react'
import PropTypes from 'prop-types'
import { Link, useNavigate } from "react-router-dom";

let state = '';
let str = '';

const MyFunc = () => {
    let text = document.getElementById("search").value;
    str = '/Search/' + text;
    document.getElementById("search").value = "";
    window.location = str;
}

export default function header(prop) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">{prop.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">New</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Top">Top</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Best">Best</a>
                            </li>
                        </ul>
                        {(prop.searchbar)?
                        <form className="d-flex">
                                <input className="form-control me-2" id="search" type="search" placeholder="Search" aria-label="Search"/>
                                <a className="btn btn-outline-success" onClick={MyFunc}>Search</a>
                        </form> : ""
                        }
                    </div>
                </div>
            </nav>
            </div>
    )
}

header.defaultProps = {
    title: "NO Title",
}

header.propTypes = {
    title: PropTypes.string,
    searchbar: PropTypes.bool.isRequired
}