<template>
    <div class="app">
        <div>
            <div>
                <button @click="$store.state.likes += 1">Like</button>
                <button @click="$store.state.dislikes += 1">Dislike</button>
            </div>
            <div>Количество лайков: {{$store.state.likes}}</div>
            <div>Количество дизлайков: {{$store.state.dislikes}}</div>
        </div>
        <h1>Страница с постами</h1>
        <my-input v-model="searchQuery" placeholder="Поиск..."></my-input>
        <div class="app__btns">
            <my-button style="margin-top: 0;" @click="showDialog">Создать пост</my-button>
            <my-select v-model="selectedSort" :options="sortOptions"/>
        </div>
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost"/>
        </my-dialog>
        <post-list @remove="removePost" :posts="sortAndSearchPosts"/>
    </div>
</template>

<script>
import PostList from '@/components/PostList'
import PostForm from '@/components/PostForm'
import MySelect from '@/components/UI/MySelect.vue';
export default {
    components: {
    PostForm,
    PostList,
    MySelect
},
    data() {
        return {
            
        }
    },
    methods: {
        createPost: function(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },
        removePost(post){
            this.posts = this.posts.filter(p => p.id != post.id)
        },
        showDialog() {
            this.dialogVisible = true;
        }
    },
    computed: {
        
    },  
    watch: {
        selectedSort(newValue) {
            this.posts.sort((post1, post2) => {
                return post1[newValue]?.localeCompare(post2[newValue])
                // no matter what to use newValue or this.selectedSort
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.app__btns {
    display: flex;
    justify-content: space-between;
}
</style>
