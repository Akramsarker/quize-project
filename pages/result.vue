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
          You Got <span class="color-blue">{{ totalResult }}</span> Score
        </p>
        <h4 class="took-time">
          Took Times <span class="color-blue">{{ filterMinutes }}</span> Minutes
          <span class="color-blue">{{ filterSeconds }}</span>
          Seconds
        </h4>
        <button class="btn-primary" @click="gotoHomePage">START AGAIN</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data() {
        return {
          totalTimes: 600,
        }
      },
    }
  },
  computed: {
    totalResult() {
      return this.$store.state.totalResult
    },
    totalTakeTime() {
      return this.$store.state.totalTime
    },
    finalTime() {
      return 600 - this.totalTakeTime
    },
    convertMinutes() {
      return Math.floor(this.finalTime / 60)
    },
    filterMinutes() {
      return this.convertMinutes <= 9
        ? '0' + this.convertMinutes
        : this.convertMinutes
    },
    convertSeconds() {
      return Math.floor(this.finalTime - this.convertMinutes * 60)
    },
    filterSeconds() {
      return this.convertSeconds <= 9
        ? '0' + this.convertSeconds
        : this.convertSeconds
    },
  },
  methods: {
    gotoHomePage() {
      this.$router.push('/quize')
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
    min-width: 420px;
    background: #ffffff;
    box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .congrats-image {
      width: 180px;
    }
    .header-title {
      font-family: 'Raleway';
      font-weight: 700;
      font-size: 2.188rem;
      line-height: 53px;
      color: #000000;
      margin: 1rem 0 0 0;
    }
    .score {
      font-family: 'Raleway';
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 29px;
      text-align: center;
      color: #373434;
      margin-bottom: 0.5rem;
    }
    .color-blue {
      color: #5549d3;
      font-weight: 700;
    }
    .took-time {
      font-family: 'Raleway';
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 29px;
      color: #373434;
      margin-bottom: 2rem;
    }
  }
}
</style>
