<template>
    <h1>{{ msg }}</h1>
    <input v-model="msg">
</template>

<script>
import { ref } from 'vue'
import consts from './const.js'
export default {

    setup() {
        const msg = ref(JSON.stringify(consts, null, 2))
        return {
            msg
        }
    }
}

</script>
