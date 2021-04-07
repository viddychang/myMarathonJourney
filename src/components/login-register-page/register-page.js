import React, {useState} from "react";
import {Link} from "react-router-dom";

const Register = () => {
    const [password, setPassword] = useState('');
    const [tempPassword, setTempPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [role, setRole] = useState('');

    /*
    TODO: figure out how to verify password inputs match

    */

    return (
        <div className="container">
            <h1>New User Registration</h1>

            <form>
                <div className="form-group row">
                    <label for="username" className="col-sm-2 col-form-label">
                        Username </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                            id="username"
                            placeholder="Enter a username."
                            onChange={(event) => setUserName(event.target.value)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="password" className="col-sm-2 col-form-label">
                        Password </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control"
                            id="password" placeholder="Enter a password."
                            onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="passwordVerify" className="col-sm-2 col-form-label">
                        Verify Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control"
                            id="passwordVerify" placeholder="Verify your password."
                            onChange={(event) => setTempPassword(event.target.value)}/>
                    </div>
                </div>
                <div className="form-group row">
                <label for="chooseRole" className="col-sm-2 col-form-label">
                        Choose a role</label>
                    <div className="col-sm-10">
                        <select className="custom-select" name="chooseRole" id="chooseRole"
                                onChange={(event) => setRole(event.target.value)}>
                            <option value="ADMINISTRATOR">Administrator</option>
                            <option value="COMMUNITY">Community</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <button className="btn btn-primary btn-block" formaction={`/profile`}>Sign Up</button>
                        <button className="btn btn-danger btn-block" formaction={"/"}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )



}
export default Register;