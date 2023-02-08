import Vuex from "vuex";

const store = new Vuex.Store({
  state: {
    players: [
      {
        name: "Boris-Животное №0",
        score: 0,
        scorePerRound: "",
        scoresPerRounds: [],
        id: 0,
      },
      {
        name: "Boris-Животное №1",
        score: 0,
        scorePerRound: "",
        scoresPerRounds: [],
        id: 1,
      },
      {
        name: "Boris-Животное №2",
        score: 0,
        scorePerRound: "",
        scoresPerRounds: [],
        id: 2,
      },
      {
        name: "Boris-Животное №3",
        score: 0,
        scorePerRound: "",
        scoresPerRounds: [],
        id: 3,
      },
    ],
    playerCount: 0,
    maxScore: 500,
  },
  mutations: {
    addPlayer(state, playerName) {
      state.players.push({
        id: state.playerCount++,
        name: playerName,
        score: "",
        scorePerRound: "",
        scoresPerRounds: [],
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
    deletePlayer(state, id) {
      const idx = state.players.findIndex((player) => player.id === id);
      state.players.splice(idx, 1);
    },
    editingPlayers(state, editedPlayers) {
      state.players = editedPlayers;
    },
  },
  getters: {
    getPlayers(state) {
      return state.players;
    },
    getMaxScore(state) {
      return state.maxScore;
    },
    getRoundsCount(state) {
      return state.players.length ? state.players[0].scoresPerRounds.length : 0;
    },
  },
});

export default store;
