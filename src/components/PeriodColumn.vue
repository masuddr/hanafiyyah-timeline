<template>
  <div class="period-col">
    <div class="period-header">
      <div class="period-era">{{ period.era }}</div>
      <div class="period-hijri">{{ period.hijri }}</div>
      <div class="period-dynasty">{{ period.dynasty }}</div>
    </div>
    <div class="period-count">{{ scholars.length }} scholar{{ scholars.length !== 1 ? 's' : '' }}</div>

    <ScholarCard
      v-for="scholar in scholars"
      :key="scholar.name"
      :scholar="scholar"
      :active-card="activeCard"
      :search="search"
      :all-scholars="allScholars"
      @click="$emit('card-click', scholar)"
      @hover="$emit('card-hover', $event)"
    />
  </div>
</template>

<script setup>
import ScholarCard from '@/components/ScholarCard.vue'

defineProps({
  period:     { type: Object, required: true },
  scholars:   { type: Array,  default: () => [] },
  activeCard: { type: Object, default: null },
  search:     { type: String, default: '' },
  allScholars:{ type: Array,  default: () => [] }
})

defineEmits(['card-click', 'card-hover'])
</script>
