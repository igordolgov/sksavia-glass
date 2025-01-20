<template lang="pug">
.custom-layout
  TheHeader_Component
    .mx-auto.px-0
      .grid.grid-cols-full
        NuxtPage
  main.p-4
    slot
</template>
