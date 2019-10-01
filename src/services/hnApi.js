import axios from 'axios';

import { selectFields } from '../selectors/selectFields';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId) => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`);

  return selectFields(result.data);
};

export const getStoryIds = async () => {
  const result = await axios.get(newStoriesUrl);

  return result.data;
};
