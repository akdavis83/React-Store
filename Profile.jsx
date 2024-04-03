import PrivateRoute from '../Components/PrivateRoute';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';



const Profile = () => {
    const [username, setUsername] = useState('');
    
    useEffect(() => {
        const currentUser = JSON.parse(sessionStorage.getItem('user'));
        
        if (currentUser) {
            // Make a GET request to fetch user data from Firebase using the currentUser information
            axios.get(`https://storage4store-default-rtdb.firebaseio.com/users/${currentUser}`)
                .then(response => {
                    setUsername(response.data.username);
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, []);
   
    return (
        <>
            <PrivateRoute />
            <div className="Profile">
                <img src="https://thumbnails.creationswap.com/gallery/93/7/93774_3_5.jpg" alt="profile-icon" />
                <div className="personal-info">
                    <p><span>Email: </span> {username} </p> 
                    <Link className="btn btn-outline dark" to="/home">Back</Link>
                </div>
            </div>
        </>
    );
}

export default Profile;

