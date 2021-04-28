import { ToastContainer, toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import {Link, useHistory, useParams} from "react-router-dom";
import marathonJourneyService from '../../../services/marathon-journey-service';
import RaceDetailCardPrivate from './race-details-card-private'
import RaceDetailCardPublic from './race-detail-card-public'

const RaceDetailsSection = ({profileId, 
                            currentLoginUser,
                            otherUser}) => {
                              
  const [marathons, setMarathons] = useState()

  const updateMarathonList = () => {
    marathonJourneyService.findMarathonJourneyForUser(profileId)
      .then((response) => setMarathons(response))

  }

  useEffect(() => {
    marathonJourneyService.findMarathonJourneyForUser(profileId)
      .then(
        (response) => {setMarathons(response)
          console.log(response)
        }
      )


  },[])

  return (
    <div>
    <div className="row pt-3"> 
      <div className="col-4 d-none d-sm-none d-md-block">
        <h4>
          Marathon Tick List
        </h4> 

        {
      marathons && currentLoginUser && otherUser
      && currentLoginUser.userId === otherUser.userId && 
      
      <button className="btn btn-primary" onClick={ () => {
        marathonJourneyService.createMarathonJourney(currentLoginUser.userId, {
          raceId: null,
          raceName: "Custom race",
          raceURL: "example.com",
          raceLogo: "https://f.hubspotusercontent20.net/hubfs/2482872/bd2da3b952fb872954bdd459cfc7b99e.jpg",
          raceDate: 'mm/dd/yyyy',
        })
        updateMarathonList()
        }}>
        Add a Journey
      </button>
    }

        
      </div>
    </div>
    
    {
      marathons && currentLoginUser && otherUser
      && currentLoginUser.userId === otherUser.userId && <br/>
    }
    <div className="row wbdv-padding-sm-right">

      {  marathons && currentLoginUser && otherUser
      && currentLoginUser.userId === otherUser.userId &&
        marathons.map(marathon =>
          <RaceDetailCardPrivate race={marathon}
                      raceLogo={marathon.raceLogo}
                      raceTitle={marathon.raceName}
                      raceURL={marathon.raceURL}
                      raceDate={marathon.raceDate}
                      setMarathons={setMarathons}
                      profileId={profileId}/>
        )
      }

      { marathons && !currentLoginUser && otherUser &&
        marathons.map(marathon =>
          <RaceDetailCardPublic race={marathon}
                      raceLogo={marathon.raceLogo}
                      raceTitle={marathon.raceName}
                      raceURL={marathon.raceURL}
                      raceDate={marathon.raceDate}/>
        )
      }
    </div>
  </div>
  )

}

export default RaceDetailsSection;
