import axios from 'axios';
//structure of the store
export const state = () => ({
  stories: [], //empty array
  currentStory: {},
});
//define how store is modified
/**export const mutations = {
  setState(state, {
    name,
    value
  }) {
    return (state[name] = value);
  },
};**/

//прячем внутренною структура в метод
export const getters = {
  getStories(state) {
    return state.stories;
  },
  getStoryById(state) {
    return state.currentStory;
  },
};

export const actions = {
  fetchStories(state) {
    return axios.get('https://strapi.kruzhok.io/stories').then(response => {
      //changes happened, please commit new changes with data modifications
      return state.commit('allStoriesFetched', response.data);
    });
  },
  fetchStoryWithId(state, payload) {
    return axios
      .get(`https://strapi.kruzhok.io/stories/${payload.id}`)
      .then(response => {
        return state.commit('currentStoryFetched', response.data);
      });
  },
};

export const mutations = {
  allStoriesFetched(state, fetchedStories) {
    state.stories = fetchedStories;
    return state;
  },
  currentStoryFetched(state, fetchedCurrentStory) {
    state.currentStory = fetchedCurrentStory;
    return state;
  },
};
