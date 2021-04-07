import React, {useState} from 'react'
import {Link} from "react-router-dom";
import '../styles.css';

const Profile = () => {
    return(
    <div class="container">
        <h1>Profile</h1>

        <div class="alert alert-success" role="alert">
            Profile successfully saved!
        </div>

        <div class="mb-3 row">
            <label for="username"
                   class="col-sm-2 col-form-label">
                Username
            </label>
            <div class="col-sm-10">
                <input type="text"
                       placeholder="dchang"
                       title="This is your username to login. This cannot be modified."
                       class="form-control"
                       id="username"
                        readonly/>
            </div>
        </div>


        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
                Password
            </label>
            <div class="col-sm-10">
                <input type="password"
                       class="form-control"
                       id="inputPassword"/>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="email" class="col-sm-2 col-form-label">
                Email
            </label>
            <div class="col-sm-10">
                <input type="email"
                       class="form-control"
                       id="email"/>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="role" class="col-sm-2 col-form-label">
                Role
            </label>
            <div class="col-sm-10">
                <select id="role" class="form-control">
                    <option>Faculty</option>
                    <option>Student</option>
                    <option>Admin</option>
                </select>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="dob" class="col-sm-2 col-form-label">
                Date of Birth
            </label>
            <div class="col-sm-10">
                <input type="date"
                       value="2345-12-20"
                       class="form-control"
                       id="dob"/>
            </div>
        </div>

        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">

            </label>

            <div class="col-sm-10">
                <a class="btn btn-success btn-block" href="#">
                    Update
                </a>

                <a class="btn btn-danger btn-block" href="../index.html">
                    Logout
                </a>
            </div>
        </div>
    </div>
    )
}
export default Profile;