<template>
    <Main/>
</template>

<script>
import { ref } from 'vue'
import { createPinia } from "pinia"
import consts from './const.js'
import Main from './Main.vue'
export default {
    components: {
        Main
    },
    setup() {
        const pinia = createPinia()
        window.__app__.use(pinia);
    }
}


</script>
