<template>
    <div v-if="posts.length > 0">
        <h3>Список:</h3>
        <transition-group name="post-list">
            <post-item v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)"/>
        </transition-group>
    </div>
    <div v-else style="text-align: center; color: red">
        <h2>Пока нет постов</h2>
    </div>
</template>

<script>
import PostItem from './PostItem.vue'
export default {
  components: { PostItem },
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.post-list-item {
    display: inline-block;
    margin-right: 10px;
}
.list-enter-active,
.post-list-leave-active {
    transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
.post-list-move {
  transition: transform 0.4s ease;
}
</style>