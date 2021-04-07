import React from 'react'
import {Link} from "react-router-dom";

const HomeScreen = () => {
    return(
        <div>
            <h2>Home Screen</h2>
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
        </div>
    )
}

export default HomeScreen