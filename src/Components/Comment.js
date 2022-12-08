import React, { useEffect, useState } from 'react';
import { getComment } from '../Services/hnApi';

export const Comment = ({ commentid }) => {
    const [comment, setcomment] = useState([]);
    useEffect(() => {
        getComment(commentid).then(data => data && setcomment(data));
    }, []);
    const date = new Date(comment.time * 1000);
    const datestr = date.toLocaleDateString("en-US");
    const userstr = "/User/" + comment.by;
    // console.log('comment',comment);
    return comment.by ? (
        <>
            <div className="card p-4 story">
                <p><a href={userstr}>{comment.by}</a> at {datestr}</p>
                <p>{comment.text}</p>
            </div>
        </>
    ) : null;;
}