<template>
  <div class="edit-window">
    <p>Редактирование очков</p>
    <div class="edit-scores">
      <table class="table">
        <thead class="table-header">
          <tr>
            <th>Номер раунда</th>
          </tr>
          <tr v-for="(player, idx) in players" :key="idx">
            <th>{{ player.name }}</th>
          </tr>
        </thead>
        <tbody class="table-body">
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
                class="edit-score"
                @input="calculatePlayerScore(idx)"
                type="number"
                v-model="player.scoresPerRounds[roundIdx]"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="buttons">
      <button class="btn" @click="editingResults">Сохранить</button>
      <button class="btn" @click="closeModal()">Отмена</button>
    </div>
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
.edit-window p {
  font-size: 20px;
  text-align: center;
}
.edit-scores {
  display: flex;
  justify-content: center;
  align-items: center;
}
.table {
  display: flex;
  gap: 15px;
}
.table-header {
  display: grid;
  gap: 5px;
}
.table-body {
}
.edit-score {
  height: 20px;
  width: 40px;
}
.buttons {
  display: flex;
  gap: 20px;
  padding: 35px 20px 20px;
  justify-content: center;
  align-items: center;
}
.btn {
  text-align: center;
  width: 110px;
  padding: 15px;
  border: 3px;
  border-radius: 5px;
}
</style>
