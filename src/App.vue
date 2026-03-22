<template>
  <div id="app">
    <TimelineHeader
      :search="search"
      :total-count="scholars.length"
      @update:search="search = $event"
    />
    <div class="scroll-area" id="scrollArea">
      <div class="timeline-track">
        <PeriodColumn
          v-for="period in periods"
          :key="period.id"
          :period="period"
          :scholars="scholarsByPeriod(period)"
          :active-card="activeCard"
          :search="search"
          :all-scholars="scholars"
          @card-click="onCardClick"
          @card-hover="hoveredScholar = $event"
        />
      </div>
    </div>
    <ScholarTooltip :scholar="hoveredScholar" :all-scholars="scholars" />
    <div class="stats-bar">
      <div class="stat">Total scholars: <strong>{{ scholars.length }}</strong></div>
      <div class="stat">Periods: <strong>10</strong></div>
      <div class="stat">Span: <strong>~150 AH – Present</strong></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { PERIODS } from '@/data/constants.js'
import scholars_data from '@/data/scholars.json'
import TimelineHeader from '@/components/TimelineHeader.vue'
import PeriodColumn from '@/components/PeriodColumn.vue'
import ScholarTooltip from '@/components/ScholarTooltip.vue'

// ── State
const search      = ref('')
const activeCard  = ref(null)
const hoveredScholar = ref(null)
const scholars    = ref(scholars_data)
const periods     = ref(PERIODS)

// ── Scholars per period
function getPeriodId(scholar) {
  if (scholar.death === null) return 'p10'
  for (const p of PERIODS) {
    if (scholar.death >= p.range[0] && scholar.death < p.range[1]) return p.id
  }
  return 'p10'
}

function scholarsByPeriod(period) {
  return scholars.value
    .filter(s => getPeriodId(s) === period.id)
    .sort((a, b) => {
      if (a.death === null && b.death === null) return 0
      if (a.death === null) return 1
      if (b.death === null) return -1
      return a.death - b.death
    })
}

// ── Click handler
function onCardClick(scholar) {
  const teachers = scholar.teacher || []
  const students = scholars.value.filter(x => (x.teacher || []).includes(scholar.name))
  if (teachers.length === 0 && students.length === 0) return

  if (activeCard.value?.name === scholar.name) {
    activeCard.value = null
    return
  }
  activeCard.value = scholar
}
</script>
