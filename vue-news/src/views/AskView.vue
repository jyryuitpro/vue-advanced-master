<template>
  <div>
<!--    <div v-for="item in ask">{{ item.title }}</div>-->
<!--    <div v-for="item in this.$store.state.ask">{{ item.title }}</div>-->
<!--    <div v-for="item in ask">{{ item.title }}</div>-->
<!--    <div v-for="item in fetchedAsk">{{ item.title }}</div>-->
<!--    <div v-for="item in askItems">{{ item.title }}</div>-->
<!--    <div v-for="item in fetchedAsk">{{ item.title }}</div>-->
    <ul class="news-list">
      <li v-for="item in fetchedAsk" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <router-link v-bind:to="`/item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
<!--<p v-for="item in fetchedAsk">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <router-link v-bind:to="`/item/${item.id}`">
        {{ item.title }}
      </router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>-->
  </div>
</template>

<script>
// import { fetchAskList } from '../api/index.js';
import { mapState, mapGetters } from 'vuex';

export default {
  name: "AskView",
  // data() {
  //   return {
  //     ask: [],
  //   }
  // },
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ]),
    // ...mapGetters({
    //   askItems: 'fetchedAsk'
    // }),

    // #2
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // }),

    // #1
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  // ES6 속성에 함수가 있는 경우, : function를 줄일 수 있습니다.
  // created: function() {
  created() {
    this.$store.dispatch('FETCH_ASK');
    // var vm = this;
    // fetchAskList()
    //     .then(function (response) {
    //       console.log(response);
    //       vm.ask = response.data;
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
  }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>