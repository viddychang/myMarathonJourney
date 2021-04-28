
import React, { useEffect, useState } from 'react';


const PublicDetails = ({
    userName, password, setPassword,
    emailAddress, setEmailAddress,
    role, setRole, userBio, setUserBio, 
    firstName, setFirstName, lastName, setLastName,
    dOB, setDOB, profileId, currentLoginUser, homeCity
}) => {

    return(
        <div>
            <div class="mb-3 row pt-3">
            <h3>{firstName} {lastName}</h3> 
            </div>
            <div class="mb-3 row">
            <h6>{homeCity}</h6>

            </div>
            <div class="mb-3 row">
        
            <p>{userBio}</p> 
            </div>
        </div>

    )

}

export default PublicDetails