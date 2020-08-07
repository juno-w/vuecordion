<template>
  <div :class="wrapperClass">
    
    <div v-for="(item, index) in faq" :key="index">
      <div :class="questionWrapper" @click="makeActive(index)" ref="question">
        <p :class="questionClass">{{ item.q }}</p>
        <div :class="[ iconClass, qIndex === index ? ' ' : 'rotate-45' ]">
          <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </div>
      </div>

      <collapse-transition>
        <div v-show="qIndex === index ? true : false" :class="answerClass">
          {{ item.a }}
        </div>
      </collapse-transition>

    </div>
  </div>
</template>

<script>
import { CollapseTransition } from 'vue2-transitions'

export default {
  name: 'Vuecordion',
  components: { CollapseTransition },
  props: {
    faq: {
      type: Array,
      required: true
    },
    wrapperClass: {
      type: String,
      default: 'w-full space-y-2'
    },
    questionWrapper: {
      type: String,
      default: 'bg-gradient cursor-pointer flex flex-wrap font-semibold items-center px-2 py-1 py-2 rounded-sm text-white'
    },
    questionClass: {
      type: String,
      default: 'flex-1'
    },
    answerClass: {
      type: String,
      default: 'p-2 text-sm bg-gray-100 transition duration-500 ease-in-out transform bg-white'
    },
    iconClass: {
      type: String,
      default: 'w-4 h-4 text-2xl transition duration-200 delay-200 transform'
    }
  },
  data() {
    return {
      qIndex: 0
    }
  },
  methods: {
    makeActive(index) {
       index === this.qIndex ? this.qIndex = -1 : this.qIndex = index
    }
  }
}
</script>
