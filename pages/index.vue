<template>
  <div class="w-full">
    <div
      v-if="tweets && tweets.length"
      class="w-full h-screen pt-5"
      :class="$style.tweetContainer"
    >
      <div v-for="(tweet, index) in tweets" :key="index" class="my-12">
        <Tweet :tweet="tweet" />
      </div>
    </div>
    <div v-else-if="loadingTweets" class="mt-5">
      <span>Loading tweets...</span>
    </div>
    <div v-else-if="emptyList" class="mt-5">
      <span
        >You don't follow anyone yet. Click on the "My list" button on your
        left!</span
      >
    </div>
    <div v-else class="mt-5">
      <span
        >Sorry, we can't find any tweets corresponding to your followers
        :/.</span
      >
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    cantFindTweets: (state) => state.cantFindTweets,
    emptyList: (state) => state.emptyList,
    tweets: (state) => state.tweets,
    loadingTweets: (state) => state.loadingTweets,
  }),
  async created() {
    await this.$store.dispatch('fetchTweets')
  },
}
</script>

<style lang="scss" module>
.tweetContainer {
  &:-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
