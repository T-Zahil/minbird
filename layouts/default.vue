<template>
  <div class="flex h-screen overflow-hidden">
    <!-- <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
    </select> -->
    <Sidebar />
    <div class="flex flex-col items-start flex-1 h-screen">
      <nuxt class="h-full" keep-alive />
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
  font-size: 12px;
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
  height: 1px;

  @apply w-12;
}
</style>
