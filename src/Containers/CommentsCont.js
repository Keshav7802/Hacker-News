import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStory } from '../Services/hnApi'
import { Comment } from '../Components/Comment'


export const CommentsCont = () => {
    let { storyid } = useParams();
    const [story, setStory] = useState([]);
    useEffect(() => {
        getStory(storyid).then(data => data && data.url && setStory(data));
    }, []);
    const arr = story.kids;
    // console.log(story);
    // console.log(arr);
    const date = new Date(story.time * 1000);
    const datestr = date.toLocaleDateString("en-US");
    const userstr = "/User/" + story.by;
    if (arr) {
        return story && story.url ? (
            <>
                <div className="card p-3 story">
                    <a href={story.url} className="card-header story-head">
                    <p>{story.title}</p>
                </a>
                <div className='card-body'>
                    <p className="card-text"><a href={userstr}>{story.by}</a> | Date: {datestr} | Score: {story.score}</p>
                </div>
            </div>
            <h4 className='p-4'>Comments</h4>
            {arr.map(data => <Comment key={data} commentid={data} />) }
            </>
        ) : null;
    }
    else {
        return story && story.url ? (
            <>
                <div className="card p-3 story">
                    <a href={story.url} className="card-header story-head">
                        <p>{story.title}</p>
                    </a>
                    <div className='card-body'>
                        <p className="card-text">By: {story.by} | Date: {datestr} | Score: {story.score}</p>
                    </div>
                </div>
                <p className='p-3'>No Comments to show</p>
            </>
        ) : null;
    }
};