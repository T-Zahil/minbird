<template>
  <ul class="flex">
    <li v-for="color of colors" :key="color" class="pr-1">
      <component
        :is="`icon-${color}`"
        :class="getClasses(color)"
        @click="$colorMode.preference = color"
      />
    </li>
  </ul>
</template>

<script>
import IconLight from '@/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'
import IconSepia from '@/assets/icons/sepia.svg?inline'

export default {
  name: 'ColorSwitcher',

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
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        selected: color === this.$colorMode.value,
      }
    },
  },
}
</script>

<style lang="scss">
.feather {
  @apply relative top-0 cursor-pointer m-0 rounded p-2 w-10 h-10 border;
  transition: all 0.2s ease;
  &:hover {
    top: -3px;
  }
}
</style>
