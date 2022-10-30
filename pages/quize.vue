<template>
  <div class="quize-page">
    <div class="container">
      <div class="remaining-card">
        <div class="time-count">
          <h1 class="time-header">
            Remaining Time:
            <span>00:{{ displayMinutes }}:{{ displaySeconds }}</span>
          </h1>
        </div>
        <div class="btn-container">
          <button class="btn-primary" @click="gotoNextStep">Finish</button>
        </div>
      </div>
      <div v-for="quiz in quizes" :key="quiz.id" class="quize-card">
        <h1 class="quize-question">
          <span>{{ quiz.id }}.&nbsp;</span>{{ quiz.title }}
        </h1>
        <div v-for="option in quiz.options" :key="option" class="options-field">
          <label
            ><input
              :id="option"
              type="radio"
              :name="quiz.title"
              :disabled="givenAnswer[quiz.id]"
              :value="option"
              @click="handleInput(quiz.id, option)"
            />
            {{ option }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JSConfetti from 'js-confetti'
import quizes from '~/static/test.json'

export default {
  data() {
    return {
      quizes,
      displayMinutes: 0,
      displaySeconds: 0,
      countAnswer: 0,
      setMinutes: 10 * 60,
      countNotCorrectAnswer: 0,
      totalTakeTime: 0,
      givenAnswer: {},
    }
  },

  mounted() {
    this.timeRemaining()
    this.quizes.forEach((quiz) => {
      this.givenAnswer[quiz.id] = null
    })
  },
  methods: {
    handleInput(id, option) {
      const matched = this.quizes.find((question) => question.id === id)
      this.givenAnswer[id] = option
      if (option === matched.answer) {
        this.countAnswer += 1
        this.$store.dispatch('addResult', this.countAnswer)
      } else {
        this.countNotCorrectAnswer += 1
      }
    },
    gotoNextStep() {
      this.$router.push('/result')
      this.confetty()
      this.$store.dispatch('totalTime', this.totalTakeTime)
    },
    timeRemaining() {
      const timer = setInterval(() => {
        const minutes = Math.floor(this.setMinutes / 60)
        const seconds = this.setMinutes - minutes * 60
        const takeTime = this.setMinutes--

        this.totalTakeTime = takeTime

        this.displayMinutes = minutes <= 9 ? '0' + minutes : minutes
        this.displaySeconds = seconds <= 9 ? '0' + seconds : seconds

        if (this.setMinutes < 0) {
          this.$router.push('/timeout')
          return clearInterval(timer)
        }
      }, 1000)
    },
    confetty() {
      const confetti = new JSConfetti()
      confetti.addConfetti({
        // emojis: [
        //   '🌈',
        //   '⚡️',
        //   '💥',
        //   '✨',
        //   '💫',
        //   '🌸',
        //   '🌾',
        //   '🌻',
        //   '🌟',
        //   '♥️',
        //   '💐',
        //   '🌷',
        //   '🌹',
        //   '🌱',
        //   '🌿',
        //   '☘️',
        //   '🍀',
        // ],
        confettiColors: [
          '#ff0a54',
          '#f51966',
          '#ff477e',
          '#ff7e7e',
          '#ff7096',
          '#22c10d',
          '#00ff83',
          '#ff85a1',
          '#0d32e8',
          '#f6ff00',
          '#fbb1bd',
          '#f9bec7',
          '#800080',
          '#F0F8FF',
          '#0000FF',
          '#a546cb',
        ],
        confettiNumber: 500,
        emojiSize: 100,
      })
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
    padding: 2rem 2.7rem 1.4rem 2.7rem;
    margin-bottom: 1.2rem;
    &:last-child {
      margin-bottom: 0;
    }
    .quize-question {
      font-family: 'Raleway';
      font-weight: 600;
      font-size: 1.5rem;
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
        font-size: 1.25rem;
        line-height: 35px;
        color: #000000;
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
      }
      input[type='radio'] {
        width: 17px;
        height: 17px;
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
  padding: 1.3rem 2rem;
  margin-bottom: 2rem;
  position: sticky;
  top: 2rem;
  box-shadow: 1px 1px 20px rgba(#2200869e, 0.5);
  .time-header {
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 1.563rem;
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
