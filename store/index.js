import axios from 'axios'

export const state = () => ({
  cantFindTweets: false,
  emptyList: false,
  listDisplayed: false,
  loadingTweets: false,
  tweets: null,
})

export const mutations = {
  toggleList(state, commit) {
    state.listDisplayed = commit
  },
  setTweets(state, commit) {
    state.tweets = commit
  },
  setCantFindTweets(state, commit) {
    state.cantFindTweets = commit
  },
  setEmptyList(state, commit) {
    state.emptyList = commit
  },
  setLoadingTweets(state, commit) {
    state.loadingTweets = commit
  },
}

export const actions = {
  async fetchTweets({ commit, rootState }) {
    if (rootState.localStorage.followingList.length) {
      commit('setLoadingTweets', true)
      const response = await axios.get(
        `https://api-minbird.thomas-sanlis.com/tweets?u=${rootState.localStorage.followingList}`
      )
      commit(
        'setTweets',
        response.data.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date)
        })
      )
      commit('setLoadingTweets', false)
      commit('setCantFindTweets', false)
      commit('setEmptyList', false)
      if (!rootState.tweets || !rootState.tweets.length) {
        commit('setCantFindTweets', true)
      }
    } else {
      commit('setEmptyList', true)
      commit('setTweets', null)
    }
  },
}
