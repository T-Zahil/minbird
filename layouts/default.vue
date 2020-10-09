<template>
  <div class="flex flex-col h-screen overflow-hidden md:flex-row">
    <Sidebar />
    <div
      class="flex flex-col items-center flex-1 min-h-screen overflow-y-scroll md:items-start"
    >
      <nuxt class="h-full px-8 md:px-0" keep-alive />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$colorMode.preference = 'sepia'
  },
}
</script>

<style lang="scss">
@font-face {
  font-family: 'CascadiaCode';
  src: url('../assets/fonts/CascadiaMono.woff2') format('woff2'),
    url('../assets/fonts/CascadiaMono.ttf') format('truetype');
}

body {
  transition: background-color 0.3s ease;
  font-size: 13px;
  font-family: 'CascadiaCode', Arial, sans-serif;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}

.dark-mode {
  body {
    @apply bg-dark text-sepia;
  }

  .divider {
    @apply bg-orange-200;
  }

  button {
    @apply bg-sepia text-dark;

    &:hover {
      @apply bg-white;
    }
  }

  .feather {
    @apply border-brown-200;
    &.selected {
      @apply bg-sepia text-dark;
    }
  }
}

.sepia-mode {
  body {
    @apply text-brown-200 bg-sepia;
  }

  button {
    @apply bg-brown-200 text-sepia;

    &:hover {
      @apply bg-brown-100;
    }
  }

  .divider {
    @apply bg-brown-100;
  }

  .feather {
    @apply border-brown-200;
    &.selected {
      @apply bg-brown-200 text-sepia;
    }
  }
}

.light-mode {
  body {
    @apply text-dark bg-gray-100;
  }

  button {
    @apply bg-dark text-sepia;

    &:hover {
      @apply bg-gray-800;
    }
  }

  .divider {
    @apply bg-gray-500;
  }

  .feather {
    @apply border-dark;
    &.selected {
      @apply bg-dark text-sepia;
    }
  }
}

.divider {
  @apply w-12 my-2;
  height: 1px;
}
</style>
