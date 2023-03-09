import { createRouter, createWebHistory } from "vue-router";
import Game from "../views/Game.vue";
import GameEnd from "../views/GameEnd.vue";
import GameStart from "../views/GameStart.vue";
import Admin from "../views/Admin.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/game",
      name: "game",
      component: Game,
    },
    {
      path: "/game-end",
      name: "game-end",
      component: GameEnd,
    },
    {
      path: "/",
      name: "game-start",
      component: GameStart,
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
    },
  ],
});

export default router;
