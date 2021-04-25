import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';


const HomeScreen = () => {
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
                    <div className='buttons'>
                        <Link to='/register' className='btn btn-primary'>
                            Sign Up
                        </Link>
                        <Link to='/login' className='btn btn-light'>
                            Login
                        </Link>
                        <br/>
                        <Link to='/search' className='btn btn-secondary'>
                            Search for Races
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HomeScreen;