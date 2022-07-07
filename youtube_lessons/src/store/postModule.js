
export const postModule = { 
    state: () => ({
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
    }),
    getters: {
        sortedPosts(state) {
            return [state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]));
        },
        sortAndSearchPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.post = posts;
        },
        setDialogVisible(state, dialogVisible) {
            state.dialogVisible = dialogVisible;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
    },
    actions: {

    }
};