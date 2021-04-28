import { ToastContainer, toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import userService from '../../services/user-service';
import {Link, useHistory} from "react-router-dom";



const PrivateDetails = ({
    userName, password, setPassword,
    emailAddress, setEmailAddress,
    role, setRole, userBio, setUserBio, 
    firstName, setFirstName, lastName, setLastName,
    dOB, setDOB, profileId, currentLoginUser, homeCity,
    setHomeCity
}) => {

    const history = useHistory()

    const updateUserInfo = () => {
        userService.updateUser(profileId, 
            {...currentLoginUser,
                password: password,
                userBiography: userBio,
                dateOfBirth: dOB,
                firstName: firstName,
                lastName: lastName,
                homeCity: homeCity,
                emailAddress: emailAddress,
        }).then((user) => {
            // console.log("hi")
            if (user === 1) {
                toast.success("Successfully updated!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
            else {
                toast.error("Update failed. Please try again later.", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
        }
            
        )
    }


    const logUserOut = () => {
        userService.logoutUser()
            .then((response) => {
                console.log(response)
                if (response !== null) {
                    toast.success("Successfully logged out!", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                    history.push(`/home`)
                }
                else {
                    toast.error("Something went wrong. Please try again later.", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                }
            })
    }

    // console.log(firstName)
    return (
        <div className="wbdv-padding-60">
        <div class="mb-3 row">
            <label for="username"
                   class="col-sm-2 col-form-label">
                Username
            </label>
            <div class="col-sm-10">
                <input type="text"
                       placeholder={userName}
                       title="This is your username to login. This cannot be modified."
                       class="form-control"
                       id="username"
                        disabled/>
            </div>
        </div>


        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
                Password
            </label>
            <div class="col-sm-10">
                <input type="password"
                       class="form-control"
                       id="inputPassword"
                       value={password}
                       onChange={(event => setPassword(event.target.value))}/>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="First " class="col-sm-2 col-form-label">
                Email
            </label>
            <div class="col-sm-10">
                <input type="email"
                       class="form-control"
                       id="email"
                       value={emailAddress}
                       onChange={(event => setEmailAddress(event.target.value))}/>
            </div>
        </div>


        <div class="mb-3 row">
            <label for="firstName" class="col-sm-2 col-form-label">
                First Name
            </label>
            <div class="col-sm-10">
                <input type="text"
                       class="form-control"
                       id="firstName"
                       value={firstName}
                       onChange={(event => setFirstName(event.target.value))}/>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="lastName" class="col-sm-2 col-form-label">
                Last Name
            </label>
            <div class="col-sm-10">
                <input type="text"
                       class="form-control"
                       id="lastName"
                       value={lastName}
                       onChange={(event => setLastName(event.target.value))}/>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="home-city" class="col-sm-2 col-form-label">
                Home City
            </label>
            <div class="col-sm-10">
                <input type="text"
                       class="form-control"
                       id="home-city"
                       value={homeCity}
                       onChange={(event => setHomeCity(event.target.value))}/>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="userBio" class="col-sm-2 col-form-label">
                User Bio
            </label>
            <div class="col-sm-10">
                <textarea 
                       class="form-control"
                       id="userBio"
                       value={userBio}
                       onChange={(event => setUserBio(event.target.value))}/>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="role" class="col-sm-2 col-form-label">
                Role
            </label>
            <div class="col-sm-10">
                <input type="text" id="role" class="form-control" value={role} disabled>
                </input>
            </div>
        </div>

        <div class="mb-3 row">
            <label for="dob" class="col-sm-2 col-form-label">
                Date of Birth
            </label>
            <div class="col-sm-10">
                <input type="date"
                       value={dOB}
                       class="form-control"
                       id="dob"
                       onChange={(event => setDOB(event.target.value))}/>
            </div>
        </div>

        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">

            </label>

            <div class="col-sm-10">
                <button className="btn btn-success btn-block" onClick={updateUserInfo}>
                    Update
                </button>
                <button className="btn btn-danger btn-block" onClick={logUserOut}>
                    Log out
                </button>
                <ToastContainer />
                

            </div>

        </div>
        </div>
    )
}

export default PrivateDetails;