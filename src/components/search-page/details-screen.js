import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import marathonService from '../../services/marathon-service'

const DetailsScreen = () => {
    const {race_id} = useParams()
    const history = useHistory()
    const [race, setRace] = useState({})
    useEffect(() => {
        findMarathonById()
    }, [])
    const findMarathonById = () => {
        marathonService.findMarathonById(race_id)
            .then((data) => {
                setRace(data)
            })
    }
    return(
        <div>
            <button onClick={()=>{history.goBack()}}>Back</button>
            <h2>{race.race.name}</h2>
            <p>
                <img src={race.race.logo_url} width={100} style={{float: "right"}}/>
                {race.race.description}
            </p>
            <div>
                Race day: {race.race.next_date}
            </div>
            {JSON.stringify(race)}
        </div>
    )
}

export default DetailsScreen