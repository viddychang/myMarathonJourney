import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import marathonService from '../../../services/marathon-service'
import marathonJourneyService from '../../../services/marathon-journey-service'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userService from '../../../services/user-service';


const DetailsScreen = () => {
    const {race_id} = useParams()
    const history = useHistory()
    const [race, setRace] = useState([{}])
    const [marathonJourney, setMarathonJourney] = useState({})
    const [currentLoginUser, setCurrentLoginUser] = useState()
     
    useEffect(() => {
        // console.log(race_id)
        getMarathonData()
        getCurrentUser()
    }, [])
    const getMarathonData = () => {
        marathonService.findMarathonById(race_id)
            .then((data) => {
                // console.log(data)
                setRace(data.race)
            })    
            console.log(race)
    }

    const getCurrentUser = () => {
        userService.getCurrentUser()
            .then((user) => {
                setCurrentLoginUser(user)
            })
    }


    const addToProfile = () => {
        if (race !== null && currentLoginUser !== undefined) {
            marathonJourneyService.createMarathonJourney(currentLoginUser.userId, {
                ...marathonJourney,
                raceId: race.race_id,
                raceName: race.name,
                raceURL: race.url,
                raceLogo: race.logo_url,
                raceDate: race.next_date
            }).then((response) => {
                if (response !== null) {
                    toast.success("Race added to your profile!", {
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
                    toast.error("Race add failed. Please try again later.", {
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
        else {
            toast.error("Please create account or sign in to add race to profile.", {
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
    return(
        <div className="wbdv-padding-60 container">
            <button onClick={()=>{history.goBack()}} className="btn btn-primary">Back to Search</button>
            &nbsp;
            <button onClick={()=>{addToProfile()}} className="btn btn-primary">Add to profile</button>
            <ToastContainer/>
            <h2>{race.name}</h2>
            <div>
                Race day: {race.next_date}
            </div>
            <br/>
            <p>
                
                <img src={race.logo_url} width={100} style={{float: "right"}}/>
                { race.description !== undefined &&
                race.description.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, '')}
            </p>

            {/* {JSON.stringify(race)} */}

        </div>
    )
}

export default DetailsScreen