import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import userService from '../../services/user-service'

const Register = () => {
    const [creds, setCreds] = useState({userName: '', password: '', role: 'COMMUNITY'}) 
    const [tempPW, setTempPW] = useState('');
    const history = useHistory()
    const register = () => {
        console.log(creds)
        if (tempPW === creds.password) { 
            

            userService.registerUser(creds)
                .then((user) => {
                    console.log(user)
                    const userId = user.userId
                    if(user === 0) {
                        alert("username already taken")
                    } else {
                        
                        userService.loginUser()
                        history.push(`/profile/${userId}`)
                    }
                })
        }
        
    }

    const [error, setError] = useState('');

    const validatePassword = (temp) => {
        if (temp !== creds.password) {
            setError("Passwords do not match.")
        }
        else {
            setError('')
        }
        // console.log(creds.password)
        // console.log(temp)
    }

    return (
        <div className="container">
            <h1>New User Registration</h1>
            
                <div className="form-group row">
                    <label for="username" className="col-sm-2 col-form-label">
                        Username </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                            id="username"
                            placeholder="Enter a username."
                            onChange={(event) => setCreds({...creds, userName: event.target.value})}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="password" className="col-sm-2 col-form-label">
                        Password </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control"
                            id="password" placeholder="Enter a password."
                            onChange={(event) => setCreds({...creds, password: event.target.value})}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="passwordVerify" className="col-sm-2 col-form-label">
                        Verify Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control"
                            id="passwordVerify" placeholder="Verify your password."
                            onChange={(event) => {setTempPW(event.target.value)
                                                    validatePassword(event.target.value)}}/>
                        <div className="text-danger">{error}</div>

                    </div>
                </div>
                <div className="form-group row">
                <label for="chooseRole" className="col-sm-2 col-form-label">
                        Choose a role</label>
                    <div className="col-sm-10">
                        <select className="custom-select" name="chooseRole" id="chooseRole"
                                onChange={(event) => setCreds({...creds, role: event.target.value})}>
                            <option value="COMMUNITY" selected>Community</option>
                            <option value="ADMINISTRATOR">Administrator</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <button className="btn btn-primary btn-block" onClick={register}>Sign Up</button>
                        <button className="btn btn-danger btn-block" formaction={"/"}>Cancel</button>
                    </div>
                </div>
            
        </div>
    )



}
export default Register;