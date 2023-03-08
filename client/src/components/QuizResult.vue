<template>
    <p class="answer-result">{{ resultText }}</p>
</template>

<script>
export default {
    name: 'QuizResult',
    props: {
        result: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            resultText: this.result ? 'Bonne réponse!' : 'Mauvaise réponse!'
        }
    },
    mounted() {
        this.changeResultColor();
    },
    methods: {
        // Changes class of element <p> depending on the result
        changeResultColor() {
            let element = document.querySelector('.answer-result');
            if (this.result) {
                element.classList.add('right-answer');
            } else {
                element.classList.add('wrong-answer');
            }
        }

    }

}
</script>

<style scoped lang="scss">
@import "../assets/main.scss";

p.answer-result {
    font-size: 16px;
    font-weight: 700;
    margin: 0;
    padding: 0;

    &.right-answer {
        color: $green;
    }

    &.wrong-answer {
        color: $red;
    }
}
</style>