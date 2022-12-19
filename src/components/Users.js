import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User';
import './user.css'
const Users = () => {
    const users = useLoaderData();

    return (
        <div>
            <h1>Users Component</h1>
            <div className='user-container'>
                {
                    users.map(user => <User user={user} key={user.id}></User>)
                }
            </div>
        </div>
    );
};

export default Users;