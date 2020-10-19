<template>
  <div
    class="flex justify-center w-full overflow-hidden border-b border-black md:w-auto md:justify-start md:border-none"
    :class="$style.sidebar"
  >
    <!-- Static sidebar for desktop -->
    <div
      class="flex justify-center flex-shrink-0 w-full md:px-16 md:w-auto md:justify-start"
    >
      <div class="flex flex-col w-full">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex flex-col flex-1 h-0">
          <div
            class="flex flex-col justify-center flex-1 pt-5 pb-4 md:justify-start"
          >
            <div
              class="flex flex-row items-center flex-shrink-0 px-4 md:items-start md:flex-col"
            >
              <h1 class="text-xl font-extrabold">Minbird</h1>
              <div class="hidden divider md:block" />
              <p class="hidden w-64 font-semibold md:block">
                A minimalistic twitter feed, without an account. Choose the
                people you want to follow. Finally a quiet twitter.
              </p>
              <div class="hidden divider md:block" />
              <span class="inline-flex ml-6 rounded-md md:ml-0">
                <button
                  type="button"
                  class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded focus:outline-none focus:shadow-outline-black transition ease-in-out duration-150"
                  @click.stop="displayList"
                >
                  My list
                </button>
              </span>
              <div class="hidden my-2 mb-2 divider md:block" />
              <ColorSwitcher
                class="fixed right-0 flex mr-4 md:relative md:mr-0"
              />
              <div class="hidden divider md:block" />
              <div>
                <a
                  class="underline"
                  href="https://twitter.com/t_zahil"
                  rel="noopener"
                  target="_blank"
                  >Contact</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    displayList() {
      this.$store.commit('toggleList', true)
    },
  },
}
</script>

<style lang="scss" module>
.sidebar {
  min-height: 74px;
  @screen md {
    width: 415px;
    min-height: 300px;
  }
}
</style>
