<template>
    <div class="app">
        <nav-bar></nav-bar>
        <router-view></router-view>
    </div>
</template>

<script>
import NavBar from "./components/UI/NavBar.vue";
    export default {
    components: { NavBar }
}
</script>

<style lang="scss" scoped>

</style>
