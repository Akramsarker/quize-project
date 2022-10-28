<template>
  <div class="home-page">
    <div class="container">
      <div class="image-container">
        <img class="showcase-image" src="~/static/images/showcase.png" alt="" />
      </div>
      <div class="card-container">
        <h1>MCQ TEST</h1>
        <div class="start-card">
          <h3>Total Questions 10 In 10 Minute</h3>
          <p>MCQ about Tense (English 2nd paper)</p>
          <button class="btn-primary" @click="gotoQuizePage">START</button>
        </div>
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
    gotoQuizePage() {
      this.$router.push('/quize')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/styles/style.scss';
.home-page {
  background: #e0cabc;
  height: 100vh;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.showcase-image {
  max-width: 600px;
  position: relative;
  left: -7rem;
}
.card-container {
  h1 {
    font-family: 'Rosario';
    font-weight: 400;
    font-size: 40px;
    line-height: 55px;
    text-align: center;
    color: #000000;
    margin-bottom: 2.5rem;
  }
  .start-card {
    background: #ffffff;
    box-shadow: 0px 4px 70px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 3rem 2rem;
    h3 {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 41px;
      text-align: center;
      color: #373434;
      padding-bottom: 1.2rem;
    }
    p {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 29px;
      text-align: center;
      color: #373434;
      padding-bottom: 2rem;
    }
  }
}
</style>
