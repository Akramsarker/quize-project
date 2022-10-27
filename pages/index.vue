<template>
  <div class="page-container">
    <div class="card-container">
      <h1>mcq</h1>
      <p>total 10 question in 10 min</p>
      <button @click="gotoQuizePage">START</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  fetch() {
    this.fetchAllData()
  },

  methods: {
    gotoQuizePage() {
      this.$router.push('/quize')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/styles/style.scss';
.page-container {
  padding: 2rem 2rem;
  background: #f1f1f9;
  min-height: 100vh;
}

/* MAIN WORK PLACE  */
.card-container {
  width: 90%;
  max-width: 500px;
  margin: auto;
  background: #fff;
  padding: 2rem;
}
</style>
