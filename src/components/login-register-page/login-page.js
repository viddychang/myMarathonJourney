import React, {useState} from 'react'
import {Link, useHistory} from "react-router-dom";
import '../styles.css';
import './login.style.client.css';
import userService from '../../services/user-service';
import {connect} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [creds, setCreds] = useState({userName: '', password:''});
    const history = useHistory();

    const login = () => {
        userService.loginUser(creds)
            .then((user) => {
                console.log(user)
                if(user === undefined) {
                    alert("login failed, try again")
                } else {
                    console.log(user.userId)
                    history.push(`/profile/${user.userId}`)
                }
            })
            .then(userService.getCurrentUser().then((user)=> console.log(user)))
            .catch(
                toast.error("Sign in failed. Please try again later.", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }))
    }

    return (
    <div className="container wbdv-padding-60">
        <h1>Sign In</h1>
            <div className="form-group row">
                <label for="username" className="col-sm-2 col-form-label">
                    Username </label>
                <div className="col-sm-10">
                    <input className="form-control"
                        id="username"
                        placeholder="Enter your username here."
                        onChange={(event) => setCreds({...creds, userName: event.target.value})}/>
                </div>
            </div>
            <div className="form-group row">
                <label for="password" className="col-sm-2 col-form-label">
                    Password </label>
                <div className="col-sm-10">
                    <input type="password" className="form-control"
                        id="password" placeholder="Enter your password here."
                        onChange={(event) => setCreds({...creds, password: event.target.value})}/>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">
                    <button className="btn btn-primary btn-block" onClick={login}>Sign in</button>
                    <button className="btn btn-danger btn-block" onClick={() => history.push('/')}>Cancel</button>

                    <ToastContainer/>
                    <div className="row">
                        <div className="col-6">
                        </div>
                        <div className="col-6">
                            <Link to={"/register"} className="float-right">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
    </div>


    )

}



export default Login