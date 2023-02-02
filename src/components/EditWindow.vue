<template>
  <div>
    <p>Редактирование очков</p>
    <div>
      <table>
        <thead>
          <tr>
            <th>Игрок</th>
            <th>Очки</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <tr v-for="(player, idx) in players" :key="idx">
            <th>{{ player.name }}</th>
            </tr>
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
    <button @click="editingResults">Сохранить</button>
    <button @click="closeModal()">Отмена</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      players: [],
    };
  },
  beforeMount() {
    this.players = this.$store.getters.getPlayers.map((player) => {
      const playerCopy = { ...player };
      return playerCopy;
    });
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    editingResults() {
      this.closeModal();
    },
  },
};
</script>

<style></style>
