<template>
    <div class="post">
        <div class="post__content">
            <div class="name"><strong>Название: {{post.title}}</strong></div>
            <div class="descr"><strong>Описание: {{post.body}}</strong></div>
        </div>
        <div class="post__buttons">
            <my-button @click="$emit('remove', post)" style="margin-top: 0">Удалить</my-button>
            <!-- <button>Изменить пост</button> -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.post {
    display: flex;
    justify-content: flex-start;
    justify-content: space-between;
    margin-top: 10px;
    padding: 15px;
    border: 2px solid green;

    &__content {
        display: flex;
        flex-direction: column;
    }
}
</style>