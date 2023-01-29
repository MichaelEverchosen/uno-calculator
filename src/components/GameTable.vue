<template>
  <div>
    <div>Игра идет до {{ maxScore }} очков.</div>
    <table>
      <thead>
        <tr>
          <th>Игрок</th>
          <th>Очки</th>
          <th>Ред./Доб. очки</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(player, idx) in players" :key="idx">
          <td>{{ player.name }}</td>
          <td>{{ player.score }}</td>
          <td>
            <input v-model="player.scorePerRound" type="text" />
            <button @click="addScore(idx)">+</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    maxScore() {
      return this.$store.getters.getMaxScore;
    },
    players() {
      return this.$store.getters.getPlayers;
    },
  },
  methods: {
    addScore(idx) {
      this.$store.commit("addRoundScore", idx);
    },
  },
};
</script>

<style></style>
