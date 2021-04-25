import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import marathonService from "../../services/marathon-service";
import userService from "../../services/user-service";

const SearchScreen = () => {
    const history = useHistory()
    const {race} = useParams()
    const [searchCriteria, setSearchCriteria] = useState('name')
    const [searchRace, setSearchRace] = useState(race)
    const [results, setResults] = useState()
    const [nameTabActive, setNameTabActive] = useState("active")
    const [stateTabActive, setStateTabActive] = useState("")
    const [userTabActive, setUserTabActive] = useState("")
    const [users, setUsers] = useState()

    const findMarathonsByName = (raceName) => {
        // history.push(raceName, [])
        marathonService.findMarathonsByName(raceName)
            .then((results) => {
                setResults(results)
            })
    }



    const findMarathonsByState = (st) => {
        marathonService.findMarathonsByState(st)
        .then((results) => {
            setResults(results)
        })
    }

    const findUsersByName = (user) => {
        userService.getUsersByUsername(user)
            .then((response) => {
                setUsers(response)
            })
            .then(
                console.log(users)
            )
    }

    return(
        <div className="wbdv-padding-60 elsewhere">
            <h2>Search</h2>
            <div className="row">
                <div className="col-9">
                <ul className="nav nav-pills nav-fill pb-2">
                    <li className='nav-item active'>
                        <a className={`nav-link ${nameTabActive}`} onClick={() => {
                            setSearchCriteria('name')
                            setNameTabActive('active')
                            setStateTabActive('')
                            setUserTabActive('')
                        }
                        
                        }>Races by Name</a>
                    </li>
                    <li className='nav-item'>
                        <a className={`nav-link ${stateTabActive}`} onClick={() => {
                            setSearchCriteria('state')
                            setNameTabActive('')
                            setStateTabActive('active')
                            setUserTabActive('')
                        }}>Races by State</a>
                    </li>
                    <li className='nav-item'> 
                        <a className={`nav-link ${userTabActive}`}
                        onClick={() => {
                            setSearchCriteria('user')
                            setNameTabActive('')
                            setStateTabActive('')
                            setUserTabActive('active')
                            // console.log(searchCriteria)
                        }}>Other Users</a>
                    </li>

                </ul>
                </div>
                <div className="col-9">
                <input value={searchRace}
                           onChange={(event) => {
                                setSearchRace(event.target.value)
                                // console.log(searchCriteria)
                           }}
                           className="form-control"/>
                </div>
                <div className="col-3">
                    <button
                        onClick={() => {
                            if (searchCriteria === 'name') {
                                findMarathonsByName(searchRace)
                            }
                            if (searchCriteria === 'state') {
                                findMarathonsByState(searchRace)
                            }
                            if (searchCriteria === 'user') {
                                findUsersByName(searchRace)
                            }

                        }}
                        className="btn btn-primary btn-block">
                        Search
                    </button>
                </div>
            </div>
            <br/>
            <ul className="list-group">
                {
                    results && results.races && 
                    searchCriteria !== 'user' && results.races.map((mRace) => {
                        
                        return(
                            <li className="list-group-item">
                                <Link to={`/details/${mRace.race.race_id}`}>
                                    {mRace.race.name}
                                </Link>
                            </li>
                        )
                    })
                }
                {
                    
                    users 
                    && users.map((user) => {
                        console.log(user)
                        return(
                            <li className="list-group-item">
                                <Link to={`/profile/${user.userId}`}>
                                    {user.userName}
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