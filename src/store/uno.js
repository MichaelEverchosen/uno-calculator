import Vuex from "vuex";

const store = new Vuex.Store({
  state: {
    players: [
      {
        name: "Boris-Животное №0",
        score: 33,
        scorePerRound: "",
        scoresPerRounds: ["11", "22"],
      },
      {
        name: "Boris-Животное №1",
        score: 33,
        scorePerRound: "",
        scoresPerRounds: ["11", "22"],
      },
      {
        name: "Boris-Животное №2",
        score: 33,
        scorePerRound: "",
        scoresPerRounds: ["11", "22"],
      },
      {
        name: "Boris-Животное №3",
        score: 33,
        scorePerRound: "",
        scoresPerRounds: ["11", "22"],
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
    addRoundScoreToPlayers(state) {
      state.players = state.players.map((player) => {
        player.score = player.score + Number(player.scorePerRound);
        player.scoresPerRounds.push(player.scorePerRound);
        player.scorePerRound = "";
        return player;
      });
    },
    setDefaultScoreToPlayers(state) {
      state.players = state.players.map((player) => {
        player.score = 0;
        player.scorePerRound = "";
        player.scoresPerRounds = [];
        return player;
      });
    },
    deletePlayer(state, idx) {
      state.players.splice(idx, 1);
    },
    // editPlayersScore(state) {
    //   state.players = state.players.map((player) => {
    //     player.
    //     return player;
    // }
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
