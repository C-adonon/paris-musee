<script setup>
import { useStore } from '@/stores/stores.js';
import router from '@/router/index.js';
</script>

<template>
    <div class="end-start">
        <h1>Partie terminée !</h1>
        <h2>Votre score est {{ score }}</h2>
        <button @click="startQuiz">Rejouer ?</button>
    </div>
</template>

<script>
export default {
    name: 'EndQuiz',
    data() {
        return {
            score: 0
        }
    },
    created() {
        this.score = useStore().getScore;
    },
    methods: {
        startQuiz() {
            router.replace({ path: '/' });
        }
    }
};

</script>

<style scoped lang="scss">
@import "../assets/main.scss";

.end-start {
    h1,
    h2 {
        text-align: center;
    }
}
</style>