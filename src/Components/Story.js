import React, { useEffect, useState } from 'react';
import { CommentsCont } from '../Containers/CommentsCont';
import {Comment} from '../Components/Comment'
import { getStory } from '../Services/hnApi'
import { useNavigate } from 'react-router-dom';

export const Story = ({ storyId }) => {
    const navigate = useNavigate();
    // const history = useHistory();
    const [story, setStory] = useState([]);
    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    }, []);
    // console.log(story);
    const date = new Date(story.time * 1000);
    const datestr = date.toLocaleDateString("en-US");
    const str = "/Comment/" + story.id;
    const userstr = "/User/" + story.by;
    return story && story.url ? (
        <div className="card p-3 story">
            <a href={story.url} className="card-header story-head">
                <p>{story.title}</p>
            </a>
            <div className='card-body'>
                <p className="card-text">By: <a href={userstr}>{story.by}</a> | Date: {datestr} | Score: {story.score}</p>
                <a href={str}><button className="btn btn-secondary">Comment</button></a>
            </div>
        </div>
    ) : null;

    // return <p>{JSON.stringify(story)}</p>;
};