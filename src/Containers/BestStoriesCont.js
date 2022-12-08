import React, { useEffect, useState } from 'react';
import { Story } from '../Components/Story'
import { getBestStoryIds } from '../Services/hnApi';
import { useInfiniteScroll } from '../Hooks/useInfiniteScroll';

export const BestStoriesCont = () => {
    const { count } = useInfiniteScroll();
    const [storyIds, setStoryIds] = useState([]);
    useEffect(() => {
        console.log(getBestStoryIds().then(data => setStoryIds(data)));
    }, []);

    return (
        <>
            {storyIds.slice(0, count).map(data => <Story key={data} storyId={data} />)}
        </>
    );
}