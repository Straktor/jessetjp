import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// ref()s become state properties
// computed()s become getters
// function()s become actions
export default defineStore('userStore', () => {
    // Count
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)

    function increment() {
        count.value++
    }

    // name
    const name = ref('Eduardo')

    return { count, name, doubleCount, increment }
})
