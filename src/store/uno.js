import Vuex from "vuex";

const store = new Vuex.Store({
  state: {
    players: [
      {
        name: "Boris0",
        score: 0,
        scorePerRound: 0,
      },
      {
        name: "Boris1",
        score: 0,
        scorePerRound: 0,
      },
      {
        name: "Boris2",
        score: 0,
        scorePerRound: 0,
      },
      {
        name: "Boris3",
        score: 0,
        scorePerRound: 0,
      },
    ],
    maxScore: 500,
  },
  mutations: {
    addPlayer(state, playerName) {
      state.players.push({
        name: playerName,
        score: 0,
      });
    },
    setMaxScore(state, maxScore) {
      state.maxScore = Number(maxScore);
    },
    addRoundScore(state, idx) {
      state.players[idx].score =
        state.players[idx].score + Number(state.players[idx].scorePerRound);
    },
  },
  getters: {
    getPlayers(state) {
      return state.players;
    },
    getMaxScore(state) {
      return state.maxScore;
    },
  },
});

export default store;
