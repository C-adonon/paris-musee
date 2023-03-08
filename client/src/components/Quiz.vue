<script setup>
import { useStore } from '@/stores/stores.js';
import QuizBreadcrumb from '@/components/QuizBreadcrumb.vue';
import QuizImage from '@/components/QuizImage.vue';
import QuizAnswer from '@/components/QuizAnswer.vue';
import QuizResult from './QuizResult.vue';
import QuizNextBtn from './QuizNextBtn.vue';
import { getRandomPainters, getPaintingById, getRandomPaintingByPainterId } from '@/services/helpers.js';
</script>

<template>
  <section class="container">
    <!-- Quiz header -->
    <div class="quiz-top">
      <QuizBreadcrumb />
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
        <QuizNextBtn />
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
      painters: [],
      // rightAnswer: {},
      currentQuestion: {},
      // currentQuestionIndex: 0,
      round: 1,
      // isLastQuestion: false,
      // isFirstQuestion: false,
      currentPainting: null,
      imageUrl: "",
      answered: false,
      correctlyAnswered: false,
      score: 0,
    }
  },
  async created() {
    // gets a set of 4 painters
    this.painters = await getRandomPainters();
    console.log(this.painters);
    // gets a random painter from the painters array
    this.currentPainter = this.painters[Math.floor(Math.random() * this.painters.length)];
    console.log(this.currentPainter);
    console.log(this.currentPainter.id);
    // gets a random painting from the current painter
    this.currentPainting = await getRandomPaintingByPainterId(this.currentPainter.id);
    console.log(this.currentPainting);
    console.log(this.currentPainting[0].url);
    // sets the image url
    this.imageUrl = this.currentPainting[0].url;
    console.log(this.imageUrl);
    console.log(this.answered);

  },
  methods: {
    // Checks if the answer is correct
    checkAnswer(answerId) {
      this.answered = true;
      if (answerId == this.currentPainter.id) {
        this.correctlyAnswered = true;
        console.log("correct");
        this.updateScore();
        // Store
      } else {
        console.log("wrong");
      }
    },

    // Updates the score
    updateScore() {
      this.score++;
      useStore().setScore(this.score);
    },



    // nextQuestionHandler() {
    //   if (this.isLastQuestion) {
    //     this.resetQuiz();
    //   } else {
    //     this.nextQuestion();
    //   }
    // },
    // previousQuestionHandler() {
    //   if (this.isFirstQuestion) {
    //     this.resetQuiz();
    //   } else {
    //     this.previousQuestion();
    //   }
    // },

    // Initialize the quiz

    // Go to the next question

    // End the quiz
  }


  // setup() {
  // const store = useStore();
  // const { currentQuestion, currentQuestionIndex, questions } = store.state.quiz;
  // const { nextQuestion, previousQuestion, resetQuiz } = store.actions.quiz;
  // const { showHelp } = store.actions.help;

  // const isLastQuestion = currentQuestionIndex === questions.length - 1;
  // const isFirstQuestion = currentQuestionIndex === 0;

  // const nextQuestionHandler = () => {
  //   if (isLastQuestion) {
  //     resetQuiz();
  //   } else {
  //     nextQuestion();
  //   }
  // };

  // const previousQuestionHandler = () => {
  //   if (isFirstQuestion) {
  //     resetQuiz();
  //   } else {
  //     previousQuestion();
  //   }
  // };

  // return {
  //   currentQuestion,
  //   currentQuestionIndex,
  //   questions,
  //   nextQuestionHandler,
  //   previousQuestionHandler,
  //   showHelp,
  // };
  // },

}

</script>
