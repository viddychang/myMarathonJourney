import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import userService from "../../services/user-service";
import {connect} from "react-redux";


const NavLinks = () => {

    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        userService.getCurrentUser()
            .then((response) => {
                setCurrentUser(response)
                console.log(currentUser)
            });
    }, [])
    

    return (
        <>
        {/* admin */}
            {   
                currentUser && currentUser !== undefined && currentUser.role === "ADMINISTRATOR" &&
                <Link to="/admin-view">
                    <button className="btn">
                        Administration
                    </button>
                </Link>
            }
            {
                <Link to="/search">
                    <button className="btn">
                        Search
                    </button>
                </Link>
            }
            {
                currentUser && 
                    <>
                        <Link to={`/profile/${currentUser.userId}`}>
                            <button className="btn">My Profile</button>
                        </Link>
                        <Link to="/">
                            <button className="btn"
                                    onClick={() => {userService.logoutUser()
                                    }}>
                                Logout
                            </button>
                        </Link>
                    </>
            }

            {
                !currentUser &&
                <Link to="/login">
                    <button className="btn">
                        Sign in
                    </button>
                </Link>
            }
        </>
    )
}


const stpm = (state) => ({
    currentUser: state.userReducer.currentUser
})

const dtpm = (dispatch) => ({
    logoutUser: () =>
        userService.logoutUser()
            .then(status => dispatch({
                type: "LOGOUT_USER"
            })),
    getCurrentUser: () =>
        userService.getCurrentUser()
            .then(user => dispatch({
                type: "CURRENT_USER",
                user: user
            }))
})

export default connect(stpm, dtpm)
(NavLinks)