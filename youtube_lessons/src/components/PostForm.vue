<template>
    <div>
        <form @submit.prevent>
            <h1>Создание поста:</h1>
            <my-input v-model="post.title" type="text" placeholder="Название поста"/>
            <my-input v-model="post.body" type="text" placeholder="Описание поста"/>
            <my-button style="align-self: flex-end" @click="createPost">Создать</my-button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    },
    methods: {
        createPost: function() {
            this.post.id = Date.now(),
            this.$emit('create', this.post);
            this.post = {
                title: '',
                body: '',
            }
        },
    },
    // watch: {
    //     post: {
    //         handler(newValue) {
    //             console.log(newValue);
    //         },
    //         deep: true,
    //     }
    // }
    // deep watch (on every simple change)
}
</script>

<style lang="scss" scoped>
form {
    display: flex;
    flex-direction: column;
    justify-self: flex-end;
}
</style>