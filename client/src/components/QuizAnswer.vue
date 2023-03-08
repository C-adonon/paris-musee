<template>
    <button class="answer" :id="this.painterData.id" @click="answer()">{{ painterName }}</button>
</template>

<script>
export default {
    name: 'QuizAnswer',
    emits: ['answer'],
    props: {
        painterData: {
            type: Object,
            required: true
        },
        rightAnswer: {
            type: Number,
            required: true
        },
    },
    data() {
        return {
            painterName: this.painterData.name
        }
    },
    methods: {
        answer() {
            this.$emit('answer', this.painterData.id)
            console.log(this.painterData.id)
            this.changeColorAnswer();
            this.disableButtons();
        },
        // Changes the color of the answer button
        changeColorAnswer() {
            let clickedAnswer = document.getElementById(`${this.painterData.id}`);
            let correctAnswer = document.getElementById(`${this.rightAnswer}`);
            if (this.painterData.id === this.rightAnswer) {
                clickedAnswer.classList.add('right-answer');
            } else {
                clickedAnswer.classList.add('wrong-answer');
                correctAnswer.classList.add('right-answer');
            }
        },
        // Disables all buttons when an answer is selected
        disableButtons() {
            const buttons = document.querySelectorAll('button.answer');
            buttons.forEach(button => {
                button.disabled = true;
            });
        },
    }
}
</script>

<style scoped lang="scss">
@import "../assets/main.scss";

button.answer {
    background-color: $white;
    border: none;
    width: 100%;
    height: 45px;
    font-size: 16px;
    font-weight: 700;

    &.right-answer {
        background-color: $green;
    }

    &.wrong-answer {
        background-color: $red;
    }
}
</style>