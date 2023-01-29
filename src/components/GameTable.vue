<template>
  <div>
    <div>Игра идет до {{ maxScore }} очков.</div>
    <table>
      <thead>
        <tr>
          <th>Игрок</th>
          <th>Очки</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(player, idx) in players" :key="idx">
          <td>{{ player.name }}</td>
          <td>{{ player.score }}</td>
          <td></td>
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
};
</script>

<style></style>
