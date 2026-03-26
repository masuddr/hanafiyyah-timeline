<template>
  <div id="tooltip" :class="{ visible: scholar !== null }" :style="position">
    <template v-if="scholar">
      <div class="tt-name">{{ scholar.name }}</div>
      <div class="tt-death">
        <span v-if="scholar.birth">b. {{ scholar.birth }} – </span>
        <span>{{ scholar.death === null ? 'Living Scholar' : `d. ${scholar.death} AH` }}</span>
      </div>
      <div class="tt-tags">
        <span
          v-for="spec in scholar.specs"
          :key="spec"
          class="tt-tag"
          :style="{ background: COLORS[spec] }"
        >
          {{ LABELS[spec] }}
        </span>
      </div>
      <div class="tt-relations">
        <div v-if="teachers.length" class="tt-relation-row teacher">
          📖 Teacher(s): {{ teachers.join(', ') }}
        </div>
        <div v-if="students.length" class="tt-relation-row student">
          👥 Student(s): {{ students.join(', ') }}
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { COLORS, LABELS } from '@/data/constants.js'

const props = defineProps({
  scholar:    { type: Object, default: null },
  allScholars:{ type: Array,  default: () => [] }
})

// ── Mouse position
const mouse = ref({ x: 0, y: 0 })

function onMouseMove(e) {
  mouse.value = { x: e.clientX, y: e.clientY }
}

onMounted(()  => window.addEventListener('mousemove', onMouseMove))
onUnmounted(() => window.removeEventListener('mousemove', onMouseMove))

// ── Position tooltip near cursor
const position = computed(() => ({
  left: Math.min(mouse.value.x + 18, window.innerWidth  - 270) + 'px',
  top:  Math.min(mouse.value.y - 12, window.innerHeight - 200) + 'px'
}))

// ── Relations
const teachers = computed(() => props.scholar?.teacher || [])
const students = computed(() =>
  props.allScholars
    .filter(x => (x.teacher || []).includes(props.scholar?.name))
    .map(x => x.name)
)
</script>
