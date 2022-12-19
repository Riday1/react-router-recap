import React from 'react';
import { Link } from 'react-router-dom';
import './user.css'
const User = ({ user }) => {
    const { id, name, email, phone, website } = user;
    return (
        <div className='user'>
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            <p>Call him : {phone}</p>
            <p>Website : {website}</p>
            <Link to={`/user/${id}`}> Show Details</Link>
        </div>
    );
};

export default User;