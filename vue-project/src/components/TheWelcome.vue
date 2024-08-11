<script setup lang="ts">
import { ref } from 'vue';
import CountryMedals from './CountryMedals.vue';

type Country = {
  id: string
  name: string
  continent: string
  flag_url: string
  gold_medals: number
  silver_medals: number
  bronze_medals: number
  total_medals: number
  rank: number
  rank_total_medals: number
}

const medalTable = ref<Country[]>()

async function fetchMedalTable() {
  medalTable.value = undefined
  const response = await fetch('https://apis.codante.io/olympic-games/countries')
  medalTable.value = await response.json().then((json) => json.data)
}

fetchMedalTable()
</script>

<template>
  <CountryMedals v-for="country in medalTable" :key="country.id">
    <template #icon>
      <img :src="country.flag_url" class="flag" />
    </template>
    <template #heading>{{ country.rank }}. {{ country.name }} - {{ country.continent }}</template>
    Ouro: {{ country.gold_medals }} | Prata: {{ country.silver_medals }} | Bronze:
    {{ country.bronze_medals }} | Total: {{ country.total_medals }}
  </CountryMedals>
</template>

<style scoped>
.flag {
  height: 100%;
}
</style>