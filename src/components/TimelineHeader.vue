<template>
  <header>
    <span class="logo-mark">الحنفية</span>
    <div class="v-divider"></div>
    <div class="title-block">
      <h1>Hanafi Scholars Timeline</h1>
      <span class="subtitle">From Imam Abu Hanifa · 150 AH — to the Contemporary Era</span>
    </div>
    <div class="v-divider"></div>

    <!-- Search -->
    <div class="search-wrap">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
      <input
        type="text"
        id="searchInput"
        :value="search"
        placeholder="Search scholars or specialisation…"
        autocomplete="off"
        spellcheck="false"
        @input="$emit('update:search', $event.target.value)"
      />
      <span v-if="searchCount !== ''" class="search-count">{{ searchCount }}</span>
    </div>

    <!-- Legend -->
    <div class="legend">
      <div v-for="(color, key) in COLORS" :key="key" class="legend-item">
        <div class="legend-pill" :style="{ background: color }"></div>
        {{ LABELS[key] }}
      </div>
    </div>

    <!-- Total count -->
    <div class="total-count">
      <span>{{ totalCount }} scholars</span>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { COLORS, LABELS } from '@/data/constants.js'

const props = defineProps({
  search:     { type: String, default: '' },
  totalCount: { type: Number, default: 0 }
})

defineEmits(['update:search'])

const searchCount = computed(() => props.search.trim() ? '' : '')
</script>
