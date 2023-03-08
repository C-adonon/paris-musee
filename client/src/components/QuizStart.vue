<template>
    <div class="quiz-start">
        <h1>Quiz</h1>
        <button @click="startQuiz">Démarrer le Quiz</button>
    </div>
</template>

<script>
export default {
    name: 'QuizStart',
    methods: {
        startQuiz() {
            this.$router.push('/quiz');
        }
    }
}
</script>