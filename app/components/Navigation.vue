<template>
  <div class="dark:bg-black shadow-xl dark:border-gray-700 border-r h-screen sticky top-0 max-w-sm">
    <UVerticalNavigation :ui="config" :links="links"/>
  </div>
</template>

<script setup lang="ts">
import {feedsInfo} from "~~/utils/api";

const config = {
  wrapper: 'py-8 relative',
  base: 'group relative flex items-center gap-1.5 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75',
  ring: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
  padding: 'pl-6 py-2.5',
  width: 'w-full',
  rounded: 'rounded-md',
  font: 'font-medium',
  size: 'text-sm',
  active: 'text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800',
  inactive: 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50',
  label: 'truncate relative',
  icon: {
    base: 'flex-shrink-0 w-5 h-5 relative',
    active: 'text-gray-700 dark:text-gray-200',
    inactive: 'text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200',
  },
  avatar: {
    base: 'flex-shrink-0',
    size: '2xs',
  },
  badge: {
    base: 'flex-shrink-0 ml-auto relative rounded',
    color: 'gray',
    variant: 'solid',
    size: 'xs',
  },
  divider: {
    wrapper: {
      base: 'p-2',
    },
  },
}

const links = ref(Object.values(feedsInfo))
</script>