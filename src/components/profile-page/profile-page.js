import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import '../styles.css';
import userService from '../../services/user-service'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateDetails from './private-details';
import RaceDetailsSection from './race-details/race-details-grid';
import PublicDetails from './public-details';


const Profile = () => {
    const {profileId} = useParams()
    const [privateMode, setPrivateMode] = useState()
    const [currentLoginUser, setCurrentLoginUser] = useState()
    const [otherUser, setOtherUser] = useState(null)

    const [userName, setUserName] = useState()
    const [userBio, setUserBio] = useState()
    const [password, setPassword] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [dOB, setDOB] = useState()
    const [role, setRole] = useState()
    const [homeCity, setHomeCity] = useState()

    useEffect(() => {
        /// console.log('hi')
        
        userService.getCurrentUser()
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
                // console.log(userData)
                setUserName(userData.userName)
                setPassword(userData.password)
                setFirstName(userData.firstName)
                setLastName(userData.lastName)
                setDOB(userData.dateOfBirth)
                setUserBio(userData.userBiography)
                setRole(userData.role)
                setOtherUser(userData)
                setHomeCity(userData.homeCity)
            })
            // console.log(otherUser)
            // console.log(currentLoginUser)
    }, [profileId])

    return(
    <div class="container wbdv-padding-60">
        <h1>{userName}'s Marathon Journey</h1>
        <div class="container">
            {
                currentLoginUser && otherUser && currentLoginUser.userId === otherUser.userId &&
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
                    homeCity={homeCity}
                    setHomeCity={setHomeCity}
                    
                    />
                } 
            {
                otherUser && currentLoginUser && otherUser.userId !== currentLoginUser.userId &&
                <PublicDetails
                    firstName={firstName}
                    lastName={lastName}
                    userBio={userBio}
                
                />
            }
        <div>
            <RaceDetailsSection 
                profileId={profileId}
                currentLoginUser={currentLoginUser}
                otherUser={otherUser}
                homeCity={homeCity}

                
                />
        </div>
            </div>
            
    </div>
    )
}
export default Profile;