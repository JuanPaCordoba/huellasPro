<template>
    <div class="carousel-indicator">
        <button class="carousel-indicator-item" :class="{ active: currentIndex === index }"
            v-for="(item, index) in total" 
            :key="index"
            @click="$emit('switch', index)"
        ></button>
    </div>
</template>

<script>
export default {
    emits: ['switch'],
    props: ["total", "currentIndex"],
}
</script>
<style scoped>
.carousel-indicator {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 1.5em;
    z-index: 2;
}

.carousel-indicator-item {
    background-color: #f3f3f3;
    border: none;
    cursor: pointer;
    display: inline-block;
    height: 10px;
    width: 10px;
    margin: 0.21em;
    opacity: .5;
    border-radius: 50%;
    cursor: pointer;
}

.active {
    background-color: #f3f3f3;
    opacity: 1;
}
</style>