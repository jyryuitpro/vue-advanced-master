<template>
  <div>
    <list-item></list-item>
<!--    <div v-for="user in users">{{ user.title }}</div>-->
<!--    <div v-for="user in this.$store.state.news">-->
<!--      {{ user.title }}-->
<!--    </div>-->
<!--<ul class="news-list">
      <li v-for="item in this.$store.state.news" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>-->
<!--        <a v-bind:href="item.url">
          {{ item.title }}
        </a>
        <small>
          {{ item.time_ago }} by
          <router-link v-bind:to="'/user/' + item.user">{{ item.user }}</router-link>
          <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
        </small>-->
<!--      </li>-->
<!--    </ul>-->
<!--    <p v-for="item in this.$store.state.news">-->
<!--      <a v-bind:href="item.url">-->
<!--        {{ item.title }}-->
<!--      </a>-->
<!--      <small>-->
<!--        {{ item.time_ago }} by -->
<!--        <router-link v-bind:to="'/user/' + item.user">{{ item.user }}</router-link>-->
<!--        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>-->
<!--      </small>-->
<!--    </p>-->
  </div>
</template>

<script>
// import axios from 'axios';
// import { fetchNewsList } from '../api/index.js';
import ListItem from '../components/ListItem.vue';

export default {
  name: "NewsView",
  components: {
    // ListItem: ListItem
    ListItem
  }
  // data() {
  //   return {
  //     users: [],
  //   }
  // },
  // created() {
  //   this.$store.dispatch('FETCH_NEWS');
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
  // }
}
</script>

<style scoped>

</style>