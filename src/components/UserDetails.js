import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const { id, name, username, email, phone, website } = user;
    return (
        <div className='user-details'>
            <h2>User Name : {username}</h2>
            <p>Id : {id}</p>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <p>Phone : <strong>{phone}</strong></p>
            <p>Website : <small>{website}</small></p>
        </div>
    );
};

export default UserDetails;