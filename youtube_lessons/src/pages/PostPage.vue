<template>
    <!-- <div>
        <div>
            <button @click="likes += 1">Like</button>
            <button @click="dislikes += 1">Dislike</button>
        </div>
        <div>Количество лайков: {{likes}}</div>
        <div>Количество дизлайков: {{dislikes}}</div>
    </div> -->
    <div class="app">
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
            // likes: 0,
            // dislikes: 0,
            posts: [
                {id: 0, title: "Kek0", body: "Lmao0"},
                {id: 1, title: "Kek1", body: "Lmao1"},
                {id: 2, title: "Kek2", body: "Lmao2"},
            ],
            dialogVisible: false,
            selectedSort: '',
            searchQuery: '',
            sortOptions: [
                {value:"title", name: "По названию"},
                {value:"body", name: "По описанию"},
            ]
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
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
        },
        sortAndSearchPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
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
