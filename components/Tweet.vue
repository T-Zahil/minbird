<template>
  <div class="w-full">
    <div class="mb-2">
      <span>@{{ tweet.user }} •</span>
      <span>{{ formatedDate }}</span>
    </div>
    <div :class="$style.tweetContent">
      <p class="text-sm font-semibold">
        {{ tweet.content }}
      </p>
    </div>
    <div class="divider" />
  </div>
</template>

<script>
export default {
  name: 'Tweet',

  props: {
    tweet: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    formatedDate() {
      return this.tweet.date.slice(0, 16)
    },
  },
}
</script>

<style lang="scss" module>
.tweetContent {
  max-width: 510px;
}
</style>
