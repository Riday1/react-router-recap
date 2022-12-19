import React from 'react';
import { Link } from 'react-router-dom';
import './user.css'
const User = ({ user }) => {
    const { name, username, email, phone, website } = user;
    return (
        <div className='user'>
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            <p>Call him : {phone}</p>
            <p>Website : {website}</p>
            <Link> Show Details</Link>
        </div>
    );
};

export default User;