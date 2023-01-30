import Vuex from "vuex";

const store = new Vuex.Store({
  state: {
    players: [
      {
        name: "Boris-Животное №0",
        score: 0,
        scorePerRound: "",
      },
      {
        name: "Boris-Животное №1",
        score: 0,
        scorePerRound: "",
      },
      {
        name: "Boris-Животное №2",
        score: 0,
        scorePerRound: "",
      },
      {
        name: "Boris-Животное №3",
        score: 0,
        scorePerRound: "",
      },
    ],
    maxScore: 500,
  },
  mutations: {
    addPlayer(state, playerName) {
      state.players.push({
        name: playerName,
        score: "",
      });
    },
    setMaxScore(state, maxScore) {
      state.maxScore = Number(maxScore);
    },
    addScoreToPlayer(state, idx) {
      state.players[idx].score =
        state.players[idx].score + Number(state.players[idx].scorePerRound);
    },
    addRoundScoreToPlayers(state) {
      state.players = state.players.map((player) => {
        player.score = player.score + Number(player.scorePerRound);
        player.scorePerRound = "";
        return player;
      });
    },
    setDefaultScoreToPlayers(state) {
      state.players = state.players.map((player) => {
        player.score = 0;
        player.scorePerRound = "";
        return player;
      });
    },
    deletePlayer(state, idx) {
      state.players.splice(idx, 1);
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
