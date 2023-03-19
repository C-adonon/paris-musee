<script setup>
import router from '@/router';
</script>

<template>
    <div class="end-start">
        <h1>Quiz Paris Musées</h1>
        <button @click="startQuiz">Démarrer le Quiz</button>
    </div>
</template>

<script>
export default {
    name: 'QuizStart',
    methods: {
        startQuiz() {
            router.replace({ path: '/game' });
        }
    }
}
</script>
