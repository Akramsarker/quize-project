<template>
  <div class="quize-page">
    <div class="container">
      <div class="remaining-card">
        <div class="time-count">
          <h1 class="time-header">
            Remaining Time:
            <span>00:10:00</span>
          </h1>
        </div>
        <div class="btn-container">
          <button class="btn-primary" @click="gotoNextStep">Finish</button>
        </div>
      </div>

      <div v-for="(quize, id) in quizes" :key="id" class="quize-card">
        <h1 class="quize-question">
          <span>{{ quize.id }}.</span>{{ quize.title }}
        </h1>
        <div
          v-for="option in quize.options"
          :key="option"
          class="options-field"
        >
          <label
            ><input
              :id="option"
              type="radio"
              :name="quize.title"
              :value="option"
              @click="handleInput(quize.id, option)"
            />
            {{ option }}
          </label>
        </div>
      </div>
    </div>
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
.quize-page {
  background: #b0b8ff;
  min-height: 100vh;
}
.container {
  max-width: 773px;
  margin: auto;
  padding: 2rem 0;
  .quize-card {
    background: #ffffff;
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 1.2rem;
    &:last-child {
      margin-bottom: 0;
    }
    .quize-question {
      font-family: 'Raleway';
      font-weight: 700;
      font-size: 28px;
      line-height: 35px;
      color: #000000;
      padding-bottom: 1rem;
    }
    .options-field {
      margin-left: 1.5rem;
      label {
        display: block;
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 25px;
        line-height: 35px;
        color: #000000;
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
      }
      input[type='radio'] {
        width: 20px;
        height: 20px;
        border: 1px solid #000000;
        margin-right: 0.5rem;
      }
    }
  }
}
.remaining-card {
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  background: #ffffff;
  border-radius: 20px;
  padding: 1.5rem 2rem;
  margin-bottom: 1rem;
  .time-header {
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    color: #000000;
  }
}
.card-container {
  width: 90%;
  max-width: 500px;
  margin: auto;
  background: #fff;
  padding: 2rem;
}
</style>
