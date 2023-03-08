<template>
    <img :src="this.imageUrl" alt="Quiz Image" />
</template>

<script>
export default {
    name: 'QuizImage',
    props: {
        imageUrl: {
            type: String,
            required: true
        }
    },
}

</script>

<style scoped lang="scss">
@import "../assets/main.scss";

img {
    width: 100%;
    object-fit: cover;
}
</style>