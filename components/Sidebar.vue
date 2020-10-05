<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
    <div class="md:hidden">
      <div class="fixed inset-0 z-40 flex">
        <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
        <div class="fixed inset-0">
          <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
        </div>
        <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
        <div class="relative flex flex-col flex-1 w-full max-w-xs">
          <div class="absolute top-0 right-0 p-1 -mr-14">
            <button
              class="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:bg-gray-600"
              aria-label="Close sidebar"
            >
              <svg
                class="w-6 h-6 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
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
          <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div class="flex items-center flex-shrink-0 px-4">
              <img
                class="w-auto h-8"
                src="https://tailwindui.com/img/logos/workflow-logo-on-dark.svg"
                alt="Workflow"
              />
            </div>
          </div>
        </div>
        <div class="flex-shrink-0 w-14">
          <!-- Force sidebar to shrink to fit close icon -->
        </div>
      </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden px-16 md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex flex-col flex-1 h-0">
          <div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
            <div class="flex flex-col justify-center flex-shrink-0 px-4">
              <h1 class="text-xl font-extrabold">Minbird</h1>
              <div class="my-2 divider" />
              <p class="font-semibold">
                A minimalistic twitter feed, without an account. Finally a quiet
                twitter.
              </p>
              <div class="my-2 divider" />
              <span class="inline-flex rounded-md">
                <button
                  type="button"
                  class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white hover:bg-brown-100 focus:outline-none focus:shadow-outline-black transition ease-in-out duration-150"
                >
                  My list
                </button>
              </span>
              <div class="mt-4 mb-2 divider" />
              <ul class="flex">
                <li v-for="color of colors" :key="color">
                  <component
                    :is="`icon-${color}`"
                    :class="getClasses(color)"
                    @click="$colorMode.preference = color"
                  />
                </li>
              </ul>
              <div class="my-2 divider" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1 w-0 overflow-hidden">
      <div class="pt-1 pl-1 md:hidden sm:pl-3 sm:pt-3">
        <button
          class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
          aria-label="Open sidebar"
        >
          <!-- Heroicon name: menu -->
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <main
        class="relative z-0 flex-1 overflow-y-auto focus:outline-none"
        tabindex="0"
      >
        <div class="pt-2 pb-6 md:py-6">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <!-- Replace with your content -->
            <div class="py-4">
              <div
                class="border-4 border-gray-200 border-dashed rounded-lg h-96"
              ></div>
            </div>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import IconLight from '@/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'
import IconSepia from '@/assets/icons/sepia.svg?inline'

export default {
  name: 'Sidebar',
  components: {
    IconLight,
    IconDark,
    IconSepia,
  },
  data() {
    return {
      colors: ['light', 'dark', 'sepia'],
    }
  },
  methods: {
    getClasses(color) {
      // Does not set classes on ssr preference is system (because we know them on client-side)
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value,
      }
    },
  },
}
</script>

<style lang="scss">
.feather {
  @apply relative top-0 cursor-pointer m-0 rounded p-2 w-10 h-10;
  background-color: var(--bg-secondary);
  border: 2px solid var(--border-color);
  transition: all 0.1s ease;
  &:hover {
    top: -3px;
  }
  .preferred {
    border-color: var(--color-primary);
    top: -3px;
  }
  .selected {
    color: var(--color-primary);
  }
}
</style>
