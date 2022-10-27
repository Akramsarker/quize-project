<template>
  <div class="page-container">
    <div class="time">
      <h1>Remaining Time:</h1>
      <span>{{ displayHours }}:{{ minutes }}:{{ seconds }}</span>

      <p>result: {{ resultCount }}</p>
    </div>
    <div v-for="(quize, id) in quizes" :key="id" class="card">
      <h1>
        <span>{{ quize.id }}.</span>{{ quize.title }}
      </h1>
      <div v-for="option in quize.options" :key="option">
        <label for=""
          ><input type="radio" @click="handleInput(quize.id, option)" />
          {{ option }}
        </label>
      </div>
    </div>
    <button @click="gotoNextStep">Finish</button>
  </div>
</template>

<script>
// const swal = require('sweetalert2')
import quizes from '~/static/test.json'
export default {
  data() {
    return {
      quizes,
      seconds: 0,
      minutes: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0,
      countDownNone: false,
      resultCount: 0,
    }
  },
  computed: {
    _secends() {
      return 1000
    },
    _minutes() {
      return this._secends * 60
    },
    _hours() {
      return this._minutes * 60
    },
    _days() {
      return this._hours * 24
    },
  },
  // created() {
  //   setTimeout(() => {
  //     this.countDownNone = true
  //     this.loading = false
  //   }, 2000)
  // },

  mounted() {
    // this.updateCountdown()
  },
  methods: {
    // updateCountdown() {
    //   const timer = setInterval(() => {
    //     const currentYear = new Date()
    //     const newYearTime = new Date(2023, 0, 1, 0, 0, 0, 0)
    //     // Set background year
    //     const diff = newYearTime.getTime() - currentYear.getTime()
    //     if (diff < 0) {
    //       return clearInterval(timer)
    //     }
    //     const h = Math.floor((diff % this._days) / this._hours)
    //     const m = Math.floor((diff % this._hours) / this._minutes)
    //     const s = Math.floor((diff % this._minutes) / this._secends)
    //     // Add values to
    //     this.displayMinutes = m < 10 ? '0' + m : m
    //     this.displaySeconds = s < 10 ? '0' + s : s
    //     this.displayHours = h < 10 ? '0' + h : h
    //   }, 1000)
    // },
    handleInput(id, option) {
      console.log('id', id, 'option', option)
      const matched = this.quizes.find((question) => question.id === id)
      console.log(matched.answer)
      if (option === matched.answer) {
        alert('success')
        this.resultCount += 1
        localStorage.setItem('resultData', this.resultCount)
      }
    },
    gotoNextStep() {
      this.$router.push('/result')
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
