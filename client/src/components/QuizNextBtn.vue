<template>
    <div class="next" @click="nextQuestion()"><img src="../assets/icon/arrow_forward_FILL0_wght400_GRAD0_opsz48.svg"
            alt="next icon">
    </div>
</template>

<script>
export default {
    name: 'QuizNextBtn',
    emits: ['nextQuestion'],
    data() {
        return {
            nextBtn: true
        }
    },
    methods: {
        nextQuestion() {
            this.$emit('nextQuestion', this.nextBtn)
        }
    }
}

</script>

<style scoped lang="scss">
@import "../assets/main.scss";

div.next {
    background-color: $light-blue;
    width: 50px;
    height: 50px;
}
</style>