import React, { useEffect, useState } from 'react';
import { Search } from '../Services/hnApi';
import { useParams } from 'react-router-dom';
import { useInfiniteScroll } from '../Hooks/useInfiniteScroll';
import {Story} from '../Components/Story'

export const SearchCont = () => {
    let { keyword } = useParams();
    const { count } = useInfiniteScroll();
    const [story, setStory] = useState([]);
    useEffect(() => {
        Search(keyword).then(data => setStory(data));
    }, []);
    // console.log(story);
    const arr = story.hits;
    // console.log(arr);
    return arr ? (
        <>
            {arr.map(data => <Story key={data.objectID} storyId={data.objectID} />)}
        </>
    ) : null;
}