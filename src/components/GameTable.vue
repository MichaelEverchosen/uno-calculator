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
          <td>
            <button @click="toggleModal('delete-player', idx)">Х</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <button @click="finishRound">Завершить раунд</button>
      <button @click="toggleModal('finish-game')">Завершить игру</button>
    </div>
    <ModalWindow v-if="activeModalName !== ''">
      <div v-if="activeModalName === 'finish-game'">
        <p>Желаете завершить игру?</p>
        <button @click="finishGame">Завершить игру</button>
        <button @click="toggleModal()">Отмена</button>
      </div>
      <div v-if="activeModalName === 'delete-player'">
        <p>Удалить игрока?</p>
        <button @click="deletePlayer">Удалить</button>
        <button @click="toggleModal()">Отмена</button>
      </div>
    </ModalWindow>
  </div>
</template>

<script>
import ModalWindow from "@/components/ModalWindow.vue";

export default {
  components: {
    ModalWindow,
  },
  data() {
    return {
      activeModalName: "",
      activePlayerIdx: "",
    };
  },
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
      this.$store.commit("addScoreToPlayer", idx);
    },
    finishRound() {
      this.$store.commit("addRoundScoreToPlayers");
    },
    toggleModal(modalName = "", playerIdx = "") {
      this.activeModalName = modalName;
      this.activePlayerIdx = playerIdx;
    },
    finishGame() {
      this.$store.commit("setDefaultScoreToPlayers");
      this.toggleModal();
    },
    deletePlayer() {
      this.$store.commit("deletePlayer", this.activePlayerIdx);
      this.toggleModal();
    },
  },
};
</script>

<style></style>
