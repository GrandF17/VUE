<template>
    <div class="navbar">
        <!-- <router-link to="/about">Об организации</router-link>
        <router-link to="/posts">Посты</router-link> -->
        <div @click="$router.push('/')">Vue 3</div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/posts')" style="margin-top: 0;">Посты</my-button>
            <my-button @click="$router.push('/store')" style="margin-top: 0; margin-left: 10px;">Vuex посты</my-button>
            <my-button @click="$router.push('/about')" style="margin-top: 0; margin-left: 10px;">Информация</my-button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    align-items: center;
    height: 50px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;
    border-radius: 12px;
    padding: 0 15px;

    &__btns {
        margin-left: auto;
    }
}
</style>