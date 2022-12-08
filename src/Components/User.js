import React, { useEffect, useState } from 'react';
import { getUser } from '../Services/hnApi';
import { useParams } from 'react-router-dom';

export const User = () => {
    let { user } = useParams();
    const [userstate, setuserstate] = useState([]);
    useEffect(() => {
        getUser(user).then(data => data && setuserstate(data));
    }, []);
    console.log(userstate);
    // return <p>hello</p>;
    const date = new Date(userstate.created_at_i * 1000);
    const datestr = date.toLocaleDateString("en-US");
    // // console.log('comment',comment);
    return userstate ? (
        <>  
            <h3 className='p-3'>User</h3>
            <div className="card p-4 story-head m-4">
                <p>Username: {userstate.username}</p>
                <p>About: {userstate.about}</p>
                <p>UserID: {userstate.id}</p>
                <p>Contributions: {userstate.submission_count}</p>
                <p>Created at: {datestr}</p>
            </div>
        </>
    ) : null;
}