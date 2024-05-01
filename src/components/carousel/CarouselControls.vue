<template>
    <button class="carousel-control left" @click="$emit('prev')">Ant</button>
    <button class="carousel-control right" @click="$emit('next')">Sig </button>
</template>

<script>

export default {
    emits: ['prev', 'next'],
}

</script>

<style scoped>

.carousel-control {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    cursor: pointer;
    display: inline-block;
    height: 50px;
    width: 70px;
    top: calc(50% - 25px);
    color: #f3f3f3;

}

.left {
    left: 0;
}

.right {
    right: 0;
}

</style>
```