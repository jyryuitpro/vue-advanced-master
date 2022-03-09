<template>
  <div>
<!--    <div v-for="user in users">{{ user.title }}</div>-->
    <div v-for="user in this.$store.state.news">{{ user.title }}</div>
  </div>
</template>

<script>
// import axios from 'axios';
// import { fetchNewsList } from '../api/index.js';

export default {
  name: "NewsView",
  // data() {
  //   return {
  //     users: [],
  //   }
  // },
  created() {
    this.$store.dispatch('FETCH_NEWS');
    // var vm = this;
    // fetchNewsList()
    // axios.get('https://api.hnpwa.com/v0/news/1.json')
    // new Promise()
    //     .then(function (response) {
    //       console.log(response);
    //       vm.users = response.data;
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
  }
}
</script>

<style scoped>

</style>