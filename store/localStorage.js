export const state = () => ({
  followingList: [],
})

export const mutations = {
  addFollower(state, commit) {
    state.followingList.push(commit)
  },
  removeFollower(state, commit) {
    state.followingList = state.followingList.filter(
      (follower) => follower !== commit
    )
  },
}
