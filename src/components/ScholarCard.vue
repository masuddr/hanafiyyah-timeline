<template>
  <div
    class="scholar-card"
    :style="{ '--spec-col': COLORS[scholar.primary] }"
    :class="cardClass"
    @click="$emit('click', scholar)"
    @mouseenter="$emit('hover', scholar)"
    @mouseleave="$emit('hover', null)"
  >
    <div class="scholar-name">{{ scholar.name }}</div>
    <span v-if="scholar.death === null" class="living-badge">Living</span>
    <span v-else class="scholar-death">d. {{ scholar.death }} AH</span>
    <div class="spec-dots">
      <div
        v-for="spec in scholar.specs"
        :key="spec"
        class="spec-dot"
        :style="{ background: COLORS[spec] }"
        :title="LABELS[spec]"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { COLORS, LABELS } from '@/data/constants.js'

const props = defineProps({
  scholar:    { type: Object, required: true },
  activeCard: { type: Object, default: null },
  search:     { type: String, default: '' },
  allScholars:{ type: Array,  default: () => [] }
})

defineEmits(['click', 'hover'])

const cardClass = computed(() => {
  const q = props.search.trim().toLowerCase()

  // search mode
  if (q) {
    const nameMatch = props.scholar.name.toLowerCase().includes(q)
    const specMatch = props.scholar.specs.some(sp => LABELS[sp].toLowerCase().includes(q))
    return nameMatch || specMatch ? 'highlight' : 'dim'
  }

  // relation mode
  if (props.activeCard) {
    const isSelf    = props.scholar.name === props.activeCard.name
    const isTeacher = (props.activeCard.teacher || []).includes(props.scholar.name)
    const isStudent = (props.scholar.teacher || []).includes(props.activeCard.name)

    if (isSelf)      return ''
    if (isTeacher)   return 'teacher-hl'
    if (isStudent)   return 'student-hl'
    return 'relation-dim'
  }

  return ''
})
</script>
