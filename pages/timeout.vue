<template>
  <div class="timeout-page">
    <div class="timeout-container">
      <div class="timeout-card">
        <img
          class="stopwatch-image"
          src="~/static/images/stopwatch.png"
          alt=""
        />
        <h1 class="header-title">TIME OUT</h1>
        <button class="btn-primary" @click="gotoHomePage">START AGAIN</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
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
.timeout-page {
  background: linear-gradient(269.85deg, #ff646d 0.12%, #f45656 99.86%);
  height: 100vh;
}
.timeout-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .timeout-card {
    min-width: 420px;
    background: #ffffff;
    box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .stopwatch-image {
      width: 180px;
    }
    .header-title {
      font-family: 'Raleway';
      font-weight: 600;
      font-size: 2.188rem;
      line-height: 53px;
      color: #000000;
      margin: 1rem 0 1.8rem 0;
    }
  }
}
</style>
