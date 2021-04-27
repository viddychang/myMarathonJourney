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
      </div>
    </div>
   
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
