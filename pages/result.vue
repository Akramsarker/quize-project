<template>
  <div class="page-container">
    <div class="card-container">
      <h1>MCQ RESULT</h1>
      <p>You got {{ score }} number</p>
      <button @click="gotoHomePage">try again</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: 0,
    }
  },
  computed: {},
  mounted() {
    const score = localStorage.getItem('resultData')
    this.score = score
  },
  methods: {
    gotoHomePage() {
      this.$router.push('/')
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
