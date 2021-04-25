import React, {useState} from 'react'
import {Link} from "react-router-dom";
import marathonJourneyService from "../../../services/marathon-journey-service"

const RaceDetailCardPrivate = (
  {
    race,
    raceLogo, 
    raceTitle,
    raceURL,
    raceDate
  }) => {
  const [editing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(raceTitle)
  const [newURL, setNewURL] = useState(raceURL)
  const [newDate, setNewDate] = useState(raceDate)

  const saveTitle = () => {
      setEditing(false)
      const newRace = {
          ...race,
          raceName: newTitle,
          raceDate: newDate,
          raceURL: newURL,

      }
      marathonJourneyService.updateMarathonJourney(race.id, newRace)
  }

  const deleteTitle = () => {
      setEditing(false)
      marathonJourneyService.deleteMarathonJourney(race)
   }

  return (
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 pb-3">
        <div className="card">
        <img src={`${raceLogo}`}
      className="card-img-top" alt="..."/>
          <div className="card-body">
          {
            !editing && <a to={`${newURL}`}>
              <h5 className="card-title color-black">{race.raceTitle}</h5>
              </a>
          }
          {
            editing && <label>Race Name:<input onChange={(event) => setNewTitle(event.target.value)}
                              value={newTitle}
                              className="form-control"/></label>
          }
          {
            editing && <label>Race date:<input onChange={(event) => setNewURL(event.target.value)}
                              value={newDate}
                              className="form-control"/></label>
          }

            {
            editing && <label>Race URL:<input onChange={(event) => setNewURL(event.target.value)}
                              value={newURL}
                              className="form-control"/></label>
          }

          {!editing &&
          <>
            <p className="card-text">
                {newDate}
            </p>

            <a href={`${newURL}`} className="btn btn-primary">
                {newTitle}
            </a>
          </>
            }
            <div className="float-right">
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-lg fa-edit color-blue "></i>}
                {editing && <i onClick={() => saveTitle()} className="fas fa-lg fa-check wbdv-icon-padding text-success"></i>}
                {editing && <i onClick={() => deleteTitle()} className="fas fa-lg fa-times wbdv-icon-padding text-danger"></i>}
            </div>
            
          </div>
        </div>
      </div>
    )
  }


export default RaceDetailCardPrivate


