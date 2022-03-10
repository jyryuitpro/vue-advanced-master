<template>
  <div>
<!--    {{ this.$store.state.item }}-->
    <p>{{ this.$store.state.item.title }}</p>
    <div>{{ this.$store.state.item.content }}</div>
  </div>
</template>

<script>
export default {
  name: "ItemView",
  computed: {
    userInfo(){
      return this.$store.state.user;
    }
  },
  created() {
    console.log(this.$route.params.id);
    const itemId = this.$route.params.id;
    // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
    this.$store.dispatch('FETCH_ITEM', itemId);
  },
}
</script>

<style scoped>

</style>