<script setup>
import { useStore } from '@/stores/stores.js';
import router from '@/router/index.js';
import QuizBreadcrumb from '@/components/QuizBreadcrumb.vue';
import QuizImage from '@/components/QuizImage.vue';
import QuizAnswer from '@/components/QuizAnswer.vue';
import QuizResult from './QuizResult.vue';
import QuizNextBtn from './QuizNextBtn.vue';
import { getRandomPainters, getRandomPaintingByPainterId } from '@/services/helpers.js';
</script>

<template>
  <section class="container">
    <!-- Quiz header -->
    <div class="quiz-top">
      <QuizBreadcrumb :questionNbr="this.round" />
      <h2>Qui a paint cette oeuvre ?</h2>
    </div>
    <!-- Painting's image -->
    <div class="painting-image">
      <QuizImage :image-url="this.imageUrl" />
    </div>
    <!-- All answers -->
    <ul class="answer-list">
      <li v-for="(painter, id) in painters" :key="id">
        <QuizAnswer @answer="checkAnswer" :painterData="painter" :rightAnswer="this.currentPainter.id" />
      </li>
    </ul>
    <!-- Next Quiz / Help -->
    <div class="quiz-bottom">
      <p class="help" v-if="this.answered == false">choisissez une réponse</p>
      <div class="result" v-else-if="this.answered == true">
        <QuizResult :result="this.correctlyAnswered" />
        <QuizNextBtn @click="nextQuestion" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Quiz',
  components: {
    QuizBreadcrumb,
    QuizImage,
    QuizAnswer,
    QuizNextBtn,
    QuizResult,
  },
  data() {
    return {
      isQuizFinished: false,
      painters: [],
      currentPainting: [],
      imageUrl: "",
      answered: false,
      correctlyAnswered: false,
      score: 0,
      totalRounds: 10,
      round: 1,
    }
  },
  async created() {
    this.initializeQuiz();
  },
  methods: {
    // Checks if the answer is correct
    checkAnswer(answerId) {
      this.answered = true;
      if (answerId == this.currentPainter.id) {
        this.correctlyAnswered = true;
        // Store
        this.updateScore();
      }
    },

    // Updates the score
    updateScore() {
      this.score++;
      useStore().setScore(this.score);
      console.log(useStore().getScore);
    },

    // Initialize the quiz
    async initializeQuiz() {
      // gets a set of 4 painters
      this.painters = await getRandomPainters();
      // gets a random painter from the painters array
      this.currentPainter = this.painters[Math.floor(Math.random() * this.painters.length)];
      // gets a random painting from the current painter
      this.currentPainting = await getRandomPaintingByPainterId(this.currentPainter.id);
      // sets the image url
      this.imageUrl = this.currentPainting[0].url;
    },

    updateRound() {
      this.round++;
      useStore().setRound(this.round);
      console.log(useStore().getRound);
    },

    // Reset the quiz
    resetQuestion() {
      this.isQuizFinished = false
      this.painters = []
      this.currentPainting = []
      this.imageUrl = ""
      this.answered = false
      this.correctlyAnswered = false
    },

    // Goes to the next question or ends the quiz
    nextQuestion() {
      this.updateRound();
      if (this.round > this.totalRounds) {
        this.isQuizFinished = true;
        router.replace({ path: '/game-end' })
      } else {
        this.resetQuestion();
        this.initializeQuiz();
      }
    },
  }
}

</script>
