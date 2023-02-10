<template>
  <div class="history-rounds">
    <div v-if="players.length">
      <p class="title-history">История раундов</p>
      <table class="table">
        <thead>
          <tr>
            <th>Номер раунда</th>
          </tr>
          <tr v-for="(player, idx) in players" :key="idx">
            <th class="player-name">{{ player.name }}</th>
          </tr>
        </thead>
        <tbody class="body-table">
          <tr>
            <td v-for="round in roundsCount" :key="round">
              <b>
                <p class="round">{{ round }}</p>
              </b>
            </td>
          </tr>
          <tr v-for="(player, idx) in players" :key="idx">
            <td
              v-for="(scorePerRound, roundIdx) in player.scoresPerRounds"
              :key="roundIdx"
            >
              <p class="roundScore">{{ scorePerRound }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {
    players() {
      return this.$store.getters.getPlayers;
    },
    roundsCount() {
      return this.players[0].scoresPerRounds.length;
    },
  },
};
</script>

<style scoped>
.history-rounds {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title-history {
  text-align: center;
  font-size: 30px;
}

.table {
  display: flex;
  padding: 65px 0px 30px;
}
.body-table {
  text-align: center;
}
.player-name {
  padding: 15px 0px;
  font-size: 18px;
  font-weight: 500;
}

.round {
  margin: 0px;
  padding: 0px 10px 0px 10px;
}
.roundScore {
  padding-top: 14px;
  font-size: 18px;
  font-weight: 500;
  margin: 0px;
}
</style>
