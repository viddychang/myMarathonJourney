import React, {useState} from 'react'
import {Link} from "react-router-dom";


const RaceDetailCardPublic = (
    {
      race,
      raceLogo, 
      raceTitle,
      raceURL,
      raceDate
    }) => {

  
  
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 pb-3">
          <div className="card">
          <img src={`${raceLogo}`}
        className="card-img-top" alt="..."/>
            <div className="card-body">
            
              <a to={`${raceURL}`}>
                <h5 className="card-title color-black">{raceTitle}</h5>
                </a>
            

            
              <p className="card-text">
                  {raceDate}
              </p>
  
              <a href={`${raceURL}`} className="btn btn-primary">
                  {raceTitle}
              </a>
            
            
              
            </div>
          </div>
        </div>
      )
    }
  
  
  export default RaceDetailCardPublic