import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  // Définition des states
  state: () => ({
    error: null,
    playerScore: 0,
    rounds: 0,
    score: 0,
  }),

  // Définition des accesseurs getters
  getters: {
    getError() {
      return this.error;
    },
    getPlayerScore() {
      return this.playerScore;
    },
    getRound() {
      return this.rounds;
    },
    getScore(){
      return this.score;
    }
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
    setRound(rounds) {
      this.rounds = rounds;
    },
    setScore(score){
      this.score = score;
    }

  },
});
