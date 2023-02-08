<template>
  <div class="gameSetting">
    <div>
      <input
        class="data-field-input"
        v-model="score"
        type="number"
        placeholder="Максимальное количество очков"
      />
      <button class="button-editing" @click="setMaxScore">Сохранить</button>
    </div>
    <div class="">
      <input
        class="data-field-input"
        v-model="playerName"
        type="text"
        placeholder="Имя игрока"
      />
      <button class="button-editing" @click="addPlayer">Добавить</button>
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
    scoreAbs() {
      return Math.abs(Number(this.score));
    },
  },
  methods: {
    addPlayer() {
      this.$store.commit("addPlayer", this.playerName);
    },
    setMaxScore() {
      this.$store.commit("setMaxScore", this.scoreAbs);
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
.button-editing {
  margin-left: 20px;
  height: 45px;
  width: 150px;
  border: 3px;
  border-radius: 5px;
}
</style>
