<template>
  <div>
    <div
      v-if="tweets && tweets.length"
      class="w-full pt-5 overflow-y-scroll"
      :class="$style.tweetContainer"
    >
      <div v-for="(tweet, index) in tweets" :key="index" class="my-6">
        <Tweet :tweet="tweet" />
      </div>
    </div>
    <div v-else class="mt-5">
      <span>Loading tweets...</span>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    const response = await this.$axios.get(
      'https://minbird.thomas-sanlis.com/tweets?u=t_zahil,traf'
    )
    this.tweets = response.data.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date)
    })
  },
  data() {
    return {
      tweets: null,
    }
  },
  methods: {
    addUser() {},
  },
}
</script>

<style lang="scss" module>
.tweetContainer {
  &:-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}
</style>
