import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import userService from '../../services/user-service'


const HomeScreen = () => {
    const [currentLoginUser, setCurrentLoginUser] = useState()

    useEffect(() => {
        getCurrentUser()
    }, [])


    const getCurrentUser = () => {
        userService.getCurrentUser()
            .then((user) => {
                setCurrentLoginUser(user)
            })
    }


    return (
        <section className='home'>
            <div className='overlay-dark'>
                <div className='home-inner'>
                    <h1 className='x-large'>myMarathonJourney</h1>
                    <p className='lead'>
                        Create your Marathon Tick List
                        <br/>
                        & Share your Journey with Others!
                    </p>
                    <div>
                        { currentLoginUser === undefined &&
                        <>
                        <Link to='/register' className='btn btn-primary'>
                            Sign Up
                        </Link>
                        <Link to='/login' className='btn btn-light'>
                            Login
                        </Link>
                        <br/>
                        <Link to='/search' className='btn btn-secondary'>
                            Search for Races
                        </Link></>
                        
                        }
                        { currentLoginUser && <>
                        <Link to={`/profile/${currentLoginUser.userId}`} className='btn btn-primary'>
                            My Profile Page
                        </Link>
                        <Link to='/search' className='btn btn-secondary'>
                            Search for Races
                        </Link></>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HomeScreen;