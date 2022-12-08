import axios from 'axios';
import { selectFields } from '../Selectors/SelectFields';
import { selectCommFields } from '../Selectors/SelectCommField';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const algobaseUrl = 'http://hn.algolia.com/api/v1/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const bestStoriesUrl = `${baseUrl}beststories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getUser = async (user) => {
    const result = await axios.get(`${algobaseUrl}users/${user}`).then(({ data }) => data);
    return result;
}

export const Search = async (keyword) => {
    const result = await axios
        .get(`${algobaseUrl}search?query=${keyword}`).then(({ data }) => data);
    return result; 
}

export const getStory = async (storyId) => {
    const result = await axios
        .get(`${storyUrl + storyId}.json`, {params : {_limit : 10}}).then(({ data }) => selectFields(data));
    return result;
    // return selectFields(result.data);
};

export const getComment = async (commentID) => {
    const result = await axios
        .get(`${storyUrl + commentID}.json`).then(({ data }) => selectCommFields(data));
    // console.log(result);
    return result;
    // return selectFields(result.data);
};

export const getStoryIds = async () => {
    const result = await axios.get(newStoriesUrl).then(({ data }) => data); 
    return result;
};

export const getTopStoryIds = async () => {
    const result = await axios.get(topStoriesUrl).then(({ data }) => data);
    return result;
};

export const getBestStoryIds = async () => {
    const result = await axios.get(bestStoriesUrl).then(({ data }) => data);
    return result;
};
