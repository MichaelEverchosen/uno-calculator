<template>
  <div class="gameSetting">
    <div>
      <input
        class="data-field-input"
        v-model="score"
        type="number"
        placeholder="Максимальное количество очков от 200 до 1000"
      />
      <button class="btn" @click="setMaxScore" :disabled="isCantSetMaxScore">
        Сохранить
      </button>
    </div>
    <div class="">
      <input
        class="data-field-input"
        v-model="playerName"
        maxlength="20"
        type="text"
        placeholder="Имя игрока"
      />
      <button class="btn" @click="addPlayer" :disabled="isCantAddPlayer">
        Добавить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerName: "",
      score: "",
    };
  },
  computed: {
    isCantSetMaxScore() {
      return !(this.score >= 200 && this.score <= 1000 && this.score !== "");
    },
    isCantAddPlayer() {
      return !this.playerName.length || this.$store.getters.getRoundsCount > 0;
    },
  },
  methods: {
    addPlayer() {
      this.$store.commit("addPlayer", this.playerName);
      this.playerName = "";
    },
    setMaxScore() {
      this.$store.commit("setMaxScore", this.score);
      this.score = "";
    },
  },
};
</script>

<style scoped>
.gameSetting {
  display: grid;
  padding: 20px 0px 30px 0px;
  gap: 20px;
}
.data-field-input {
  height: 30px;
  width: 315px;
}
.btn {
  margin-left: 20px;
  height: 45px;
  width: 150px;
  border-radius: 5px;
}
</style>
