<template>
  <div>
    <div v-for="(tweet, index) in tweets" :key="index">
      {{ tweet.content }}
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
