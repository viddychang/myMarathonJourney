import {React, useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';
import NavLinks from "./nav-links";

import '../styles.css'


const NavBar = () => {
    const history = useHistory();

    return (
        <>
            <div className="wbdv-sticky-nav-bar">
                <div className="row">
                    <div className="col-1 center align-center">
                        <i className="fas fa-2x fa-running" onClick={() => history.push('/home')}></i>
                    </div>

                    <div className="col-3 d-none d-md-block">
                        <Link to={"/home"}>
                            <h3 className="wbdv-site-name">
                                myMarathonJourney
                            </h3>
                        </Link>

                    </div>

                    <div className="col-7 d-none d-md-block float-right">
                        <NavLinks/>
                    </div>

                </div>
            </div>
        </>
    )
}


export default NavBar