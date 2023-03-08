<script setup>
import { useStore } from '@/stores/stores.js';
</script>

<template>
    <div>
        <h1>This is the end of the quiz</h1>
        <h2>Your score is {{ score }}</h2>
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
    }
};

</script>