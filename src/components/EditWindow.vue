<template>
  <div>
    <p>Редактирование очков</p>
    <div>
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
              <input
                @input="calculatePlayerScore(idx)"
                type="number"
                v-model="player.scoresPerRounds[roundIdx]"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button @click="editingResults">Сохранить</button>
    <button @click="closeModal()">Отмена</button>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  data() {
    return {
      players: [],
    };
  },
  beforeMount() {
    this.players = _.cloneDeep(this.$store.getters.getPlayers);
  },
  computed: {
    roundsCount() {
      return this.players[0].scoresPerRounds.length;
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    calculatePlayerScore(idx) {
      let player = this.players[idx];
      player.score = player.scoresPerRounds.reduce(
        (a, b) => Number(a) + Number(b)
      );
    },
    editingResults() {
      this.$store.commit("editingPlayers", this.players);
      this.closeModal();
    },
  },
};
</script>

<style scoped>
.table {
  display: flex;
}
</style>
