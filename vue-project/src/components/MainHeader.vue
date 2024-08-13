<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="greetings">
        <h1 class="green">{{ title }}</h1>
        <h3>
          {{ subtitle }}
        </h3>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-bottom: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
