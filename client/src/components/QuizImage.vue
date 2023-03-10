<template>
    <img :src="this.imageUrl" alt="Quiz Image" />
    <div class="blur"></div>
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

div.blur {
    position: relative;
    bottom: 36px;
    height: 36px;
    background: rgba(100, 100, 100, 0.52);
    backdrop-filter: blur(2px);
}
</style>