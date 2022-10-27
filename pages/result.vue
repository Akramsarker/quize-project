<template>
  <div class="result-page">
    <div class="result-container">
      <div class="result-card">
        <img
          class="congrats-image"
          src="~/static/images/congrats2 1.png"
          alt=""
        />
        <h1 class="header-title">MCQ Result</h1>
        <p class="score">
          You Got <span class="color-blue">{{ score }}</span> Score
        </p>
        <button class="btn-primary" @click="gotoHomePage">START AGAIN</button>
      </div>
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
.result-page {
  background: linear-gradient(269.85deg, #ffdf64 0.12%, #f4d456 99.86%);
  height: 100vh;
}
.result-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .result-card {
    width: 450px;
    background: #ffffff;
    box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .congrats-image {
      width: 200px;
    }
    .header-title {
      font-family: 'Raleway';
      font-weight: 700;
      font-size: 40px;
      line-height: 53px;
      color: #000000;
      margin: 1rem 0 0.5rem 0;
    }
    .score {
      font-family: 'Raleway';
      font-weight: 400;
      font-size: 20px;
      line-height: 29px;
      text-align: center;
      color: #373434;
      margin-bottom: 2rem;
      .color-blue {
        color: #5549d3;
        font-weight: 700;
      }
    }
  }
}
</style>
