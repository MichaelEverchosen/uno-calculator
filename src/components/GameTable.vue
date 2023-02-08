<template>
  <div class="game-table">
    <div>Игра идет до {{ maxScore }} очков.</div>
    <table class="table">
      <thead>
        <tr>
          <th class="settingContent">Игрок</th>
          <th class="scoreName">Очки</th>
          <th class="settingContent">Ввести очки раунда</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(player, idx) in players" :key="idx">
          <td class="playerName">{{ player.name }}</td>
          <td class="scoreName">{{ player.score }}</td>
          <td>
            <input v-model="player.scorePerRound" type="number" />
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <button class="btn" @click="toggleModal('editing-results')">
        Редактирование очков игрока
      </button>
      <button class="btn" @click="toggleModal('delete-player')">
        Удалить игрока
      </button>
    </div>
    <div>
      <button class="btn" @click="finishRound">Завершить раунд</button>
      <button class="btn" @click="toggleModal('finish-game')">
        Завершить игру
      </button>
    </div>
    <ModalWindow v-if="activeModalName !== ''">
      <div class="finish-game" v-if="activeModalName === 'finish-game'">
        <p>Желаете завершить игру?</p>
        <div class="actions">
          <button class="btn-mw" @click="finishGame">Завершить игру</button>
          <button class="btn-mw" @click="toggleModal()">Отмена</button>
        </div>
      </div>
      <EditWindow
        v-if="activeModalName === 'editing-results'"
        @close="toggleModal()"
      ></EditWindow>
      <div v-if="activeModalName === 'delete-player'">
        <div class="MW-deletePlayer">
          <p>Какого игрока желаете удалить?</p>
          <div class="player" v-for="(player, idx) in players" :key="player.id">
            {{ player.name }}
            <button class="delete" @click="deletePlayers(player.id)">Х</button>
          </div>
          <button class="btn-mw-delete , btn-mw" @click="toggleModal()">
            Закрыть
          </button>
        </div>
      </div>
    </ModalWindow>
  </div>
</template>

<script>
import ModalWindow from "@/components/ModalWindow.vue";
import EditWindow from "@/components/EditWindow.vue";

export default {
  components: {
    ModalWindow,
    EditWindow,
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
    EditingGlasses() {
      this.$store.commit("setDefaultScoreToPlayers");
      this.toggleModal();
    },
    deletePlayers(id) {
      this.$store.commit("deletePlayer", id);
    },
  },
};
</script>

<style scoped>
.game-table {
  display: grid;
  gap: 20px;
}
.table {
  padding: 20px 0px 30px;
  max-width: 600px;
  text-align: left;
}
.playerName {
  padding-top: 15px;
  font-size: 18px;
}
.scoreName {
  text-align: center;
  vertical-align: center;
}

.btn {
  width: 230px;
  padding: 18px;
  border: 3px;
  border-radius: 5px;
  margin-right: 35px;
}

.finish-game {
  font-size: 25px;
  padding: 50px;
  width: 350px;
}

.actions {
  padding-top: 35px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.btn-mw {
  padding: 15px;
  border: 3px;
  border-radius: 5px;
}
.delete {
  height: 22px;
  width: 30px;
  border: 3px;
  border-radius: 5px;
}

.btn-mw-delete {
  margin-top: 15px;
  width: 150px;
}
.MW-deletePlayer {
  padding: 20px;
  width: 400px;
  font-size: 19px;
}
.player {
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 10px;
}
</style>
