import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import marathonService from "../../services/marathon-service"

const SearchScreen = () => {
    const history = useHistory()
    const {race} = useParams()
    const [searchRace, setSearchRace] = useState(race)
    const [results, setResults] = useState({Search: []})
    useEffect(() => {
        setSearchRace(race)
        findMarathonsByName(race)
    }, [])
    const findMarathonsByName = (raceName) => {
        // history.push(raceName, [])
        marathonService.findMarathonsByName(raceName)
            .then((results) => {
                setResults(results)
            })
    }
    return(
        <div>
            <h2>Search Screen</h2>
            <div className="row">
                <div className="col-9">
                    <input value={searchRace}
                           onChange={(event) => {
                            setSearchRace(event.target.value)
                           }}
                           className="form-control"/>
                </div>
                <div className="col-3">
                    <button
                        onClick={() => {
                            findMarathonsByName(searchRace)
                        }}
                        className="btn btn-primary btn-block">
                        Search
                    </button>
                </div>
            </div>
            <br/>
            <ul className="list-group">
                {
                    results && results.races && results.races.map((mRace) => {
                        return(
                            <li className="list-group-item">
                                <Link to={`/details/${mRace.race.race_id}`}>
                                    {mRace.race.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SearchScreen