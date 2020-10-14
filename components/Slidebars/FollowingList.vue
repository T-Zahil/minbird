<template>
  <section
    v-click-outside="clickOutside"
    :class="$style.followingList"
    class="absolute inset-y-0 left-0 flex pr-10"
  >
    <transition
      enter-active-class="transition duration-500 ease-in-out transform sm:duration-700"
      enter-class="-translate-x-full"
      enter-to-class="-translate-x-0"
      leave-active-class="transition duration-500 ease-in-out transform sm:duration-700"
      leave-class="-translate-x-0"
      leave-to-class="-translate-x-full"
    >
      <div v-if="listDisplayed" class="w-full">
        <div
          class="flex flex-col h-full py-6 space-y-6 overflow-y-auto shadow-xl followingListBg"
        >
          <header class="px-4 sm:px-6">
            <div class="flex items-start justify-between space-x-3">
              <h2 class="text-lg font-bold leading-7">Following list</h2>
              <div class="flex items-center h-7">
                <button
                  aria-label="Close panel"
                  class="transition duration-150 ease-in-out hover:text-gray-500"
                >
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    @click="closeList"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </header>
          <div class="mx-4 sm:mx-6 divider" />
          <div class="relative flex-1 px-4 sm:px-6">
            <div>
              <label for="email" class="block text-sm font-semibold leading-5">
                Enter twitter username
              </label>
              <div class="relative mt-1 mb-6 rounded-md shadow-sm">
                <input
                  id="email"
                  v-model="newFollower"
                  class="block w-full pr-12 bg-transparent form-input sm:text-sm sm:leading-5"
                  placeholder="t_zahil"
                  @keyup.enter="addFollower"
                />
                <button
                  class="absolute inset-y-0 right-0 z-10 flex items-center px-3 cursor-pointer rounded-r-md bg-brown-200"
                  @click="addFollower"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="divider" />
              <ul class="mt-4 ml-4 list-disc">
                <li
                  v-for="follower in $store.state.localStorage.followingList"
                  :key="follower"
                >
                  <span class="flex items-center justify-between">
                    <span>@{{ follower }}</span>
                    <svg
                      class="w-5 h-5 cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      @click.stop="removeFollower(follower)"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  directives: {
    ClickOutside,
  },
  data() {
    return {
      newFollower: '',
      isPreventingClickOutsideProcess: false,
    }
  },
  computed: {
    listDisplayed() {
      return this.$store.state.listDisplayed
    },
  },
  methods: {
    closeList() {
      if (!this.isPreventingClickOutsideProcess) {
        this.$store.commit('toggleList', false)
      }
    },
    clickOutside() {
      this.closeList()
      this.isPreventingClickOutsideProcess = true
      setTimeout(() => {
        this.isPreventingClickOutsideProcess = false
      }, 100)
    },
    async addFollower() {
      await this.$store.commit('localStorage/addFollower', this.newFollower)
      this.newFollower = ''
      await this.$store.dispatch('fetchTweets')
    },
    async removeFollower(follower) {
      await this.$store.commit('localStorage/removeFollower', follower)
      await this.$store.dispatch('fetchTweets')
    },
  },
}
</script>

<style lang="scss" module>
.followingList {
  max-width: 415px;
}
</style>
