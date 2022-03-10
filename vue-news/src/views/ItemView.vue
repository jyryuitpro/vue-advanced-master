<template>
  <div>
<!--    {{ this.$store.state.item }}-->
<!--    <p>{{ this.$store.state.item.title }}</p>-->
<!--    <div>{{ this.$store.state.item.content }}</div>-->
<!--    <p>{{ fetchedItem.title }}</p>-->
<!--    <div>{{ fetchedItem.content }}</div>-->
    <section>
      <!-- 질문 상세 정보 -->
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="time">
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </div>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content"></div>
    <section>

    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "ItemView",
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    console.log(this.$route.params.id);
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  },
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>