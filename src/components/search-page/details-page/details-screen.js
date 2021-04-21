import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import marathonService from '../../../services/marathon-service'

const DetailsScreen = () => {
    const {race_id} = useParams()
    const history = useHistory()
    const [race, setRace] = useState([{}])
    useEffect(() => {
        // console.log(race_id)
        getMarathonData()
    }, [])
    const getMarathonData = () => {
        marathonService.findMarathonById(race_id)
            .then((data) => {
                // console.log(data)
                setRace(data.race)
            })    
            console.log(race)
    }
    return(
        <div>
            <button onClick={()=>{history.goBack()}}>Back</button>
            <h2>{race.name}</h2>
            
            <p>
                <img src={race.logo_url} width={100} style={{float: "right"}}/>
                {race.description}
            </p>
            <div>
                Race day: {race.next_date}
            </div>
            {/* {JSON.stringify(race)} */}
        </div>
    )
}

export default DetailsScreen