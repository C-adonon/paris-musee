import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  // Définition des states
  state: () => ({
    error: null,
    score: 0,
  }),

  // Définition des accesseurs getters
  getters: {
    getError() {
      return this.error;
    },
    getScore() {
      return this.score;
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
  },
});
