<template>
  <div>
    <div v-for="item in ask">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
  name: "AskView",
  data() {
    return {
      ask: [],
    }
  },
  // ES6 속성에 함수가 있는 경우, : function를 줄일 수 있습니다.
  // created: function() {
  created() {
    var vm = this;
    fetchAskList()
        .then(function (response) {
          console.log(response);
          vm.ask = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
  }
}
</script>

<style scoped>

</style>