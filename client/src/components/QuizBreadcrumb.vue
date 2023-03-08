<template>
    <h3>Quiz ({{ questionNbr }}/10)</h3>
</template>

<script>
export default {
    name: 'QuizBreadcrumb',
    props: {
        questionNbr: {
            type: Number,
            required: true
        }
    },
}
</script>

<style scoped lang="scss">
@import "../assets/main.scss";

h3 {
    border-bottom: 1px solid $light-blue;
    width: fit-content;
    padding: 10px;
    margin: auto;
    font-weight: 400;
}
</style>