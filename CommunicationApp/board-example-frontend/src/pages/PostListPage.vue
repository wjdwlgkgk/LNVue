<template>
    <div class= "post-list-page">
        <h1>포스트 게시글 </h1>
        <post-list :posts="posts"/>
        <router-link :to="{ name : 'PostCreatePage'}"> 글쓰기 </router-link>
    </div>
</template>

<script>
// import api from '@/api'
import PostList from '@/components/PostList'
import { mapActions, mapState } from 'vuex'


export default {
    name : 'PostListPage',
    components: { PostList },
    created(){
        this.fetchPostList();
    },
    methods : {
        ...mapActions(['fetchPostList'])
    },
    computed:{
        ...mapState(['posts'])
    }

}
</script>