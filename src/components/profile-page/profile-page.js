import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import '../styles.css';
import userService from '../../services/user-service'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateDetails from './private-details';


const Profile = () => {
    const {profileId} = useParams()
    const [privateMode, setPrivateMode] = useState()
    const [currentLoginUser, setCurrentLoginUser] = useState()

    const [userName, setUserName] = useState()
    const [userBio, setUserBio] = useState()
    const [password, setPassword] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [dOB, setDOB] = useState()
    const [role, setRole] = useState()

    useEffect(() => {
        console.log('hi')
        userService.getCurrentUser()
            .then(response => response.json())

            .catch(error => {
                console.log(error);
            })
            
            .then((user) => {
                console.log(user)
                if (user !== null) {
                    setCurrentLoginUser(user)
                }
            })
        
        userService.findUserByUserId(profileId)
            .then((userData) => {
                console.log(userData)
                setUserName(userData.userName)
                setPassword(userData.password)
                setFirstName(userData.firstName)
                setLastName(userData.lastName)
                setDOB(userData.dateOfBirth)
                setUserBio(userData.userBiography)
                setRole(userData.role)
            })
    }, [profileId])

    return(
    <div class="container">
        <h1>{userName}'s Marathon Journey</h1>
        <div >
            {
        currentLoginUser !== undefined && currentLoginUser.userId === profileId &&
        <PrivateDetails 
            userName={userName}
            password={password}
            userBio={userBio}
            firstName={firstName}
            lastName={lastName}
            role={role}
            dOB={dOB}
            setDOB={setDOB}
            setPassword={setPassword}
            setUserBio={setUserBio}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setRole={setRole}
            profileId={profileId}
            currentLoginUser={currentLoginUser}
            
            />
        } 
            </div>
            
    </div>
    )
}
export default Profile;