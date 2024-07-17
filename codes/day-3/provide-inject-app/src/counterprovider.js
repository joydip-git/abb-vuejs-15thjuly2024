import { ref } from "vue"

let counter = ref(0)
const increase = () => {
    counter.value += 1
}

export default {
    counter,
    increase
}