<template>
  <div>
    <div>
      <p>История раундов</p>
      <table class="table">
        <thead>
          <tr>
            <th>Номер раунда</th>
          </tr>
          <tr v-for="(player, idx) in players" :key="idx">
            <th>{{ player.name }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="round in roundsCount" :key="round">
              <b>
                {{ round }}
              </b>
            </td>
          </tr>
          <tr v-for="(player, idx) in players" :key="idx">
            <td
              v-for="(scorePerRound, roundIdx) in player.scoresPerRounds"
              :key="roundIdx"
            >
              {{ scorePerRound }}
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
.table {
  display: flex;
}
</style>
