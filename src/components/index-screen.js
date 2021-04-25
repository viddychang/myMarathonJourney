import React from 'react'
import {Link} from "react-router-dom";

const IndexScreen = () => {
    return(
        <div className="wbdv-padding-60">
            <h2>Index</h2>
            <Link to="/search">
                Search
            </Link>
            <br/>
            <Link to="/details">
                Details
            </Link>
            <br/>
            <Link to="/register">
                Register
            </Link>
            <br/>
            <Link to="/login">
                Login 
            </Link>
            <br/>
            <Link to="/profile">
                Profile
            </Link>
            <br/>
            <Link to="/admin-view">
                Admin view
            </Link>
        </div>
    )
}

export default IndexScreen