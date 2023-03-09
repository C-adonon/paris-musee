import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  // Définition des states
  state: () => ({
    error: null,
    score: 0,
    round: 0,
    AllGameAnswers: [],
  }),

  // Définition des accesseurs getters
  getters: {
    getError() {
      return this.error;
    },
    getScore() {
      return this.score;
    },
    getRound() {
      return this.round;
    },
    getAllGameAnswers() {
      return this.AllGameAnswers;
    },
  },

  // Définition des mutateurs actions
  actions: {
    setError(text) {
      if (text == "") text = null;
      this.error = text;
    },
    setScore(score) {
      this.score = score;
    },
    setRound(round) {
      this.round = round;
    },
    setAllGameAnswers(answers) {
      this.AllGameAnswers = answers;
    },
  },
});
