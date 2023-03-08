import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  // Définition des states
  state: () => ({
    error: null,
    playerScore: 0,
    rounds: 0,
  }),

  // Définition des accesseurs getters
  getters: {
    getError() {
      return this.error;
    },
    getPlayerScore() {
      return this.playerScore;
    },
    getRounds() {
      return this.rounds;
    },
  },

  // Définition des mutateurs actions
  actions: {
    setError(text) {
      if (text == "") text = null;
      this.error = text;
    },
    setPlayerScore(score) {
      this.playerScore = score;
    },
    setRounds(rounds) {
      this.rounds = rounds;
    },
  },
});
