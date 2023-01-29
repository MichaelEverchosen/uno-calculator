<template>
  <div>
    <div class="">
      <input v-model="score" type="number" placeholder="Количество очков" />
      <button @click="setMaxScore">Сохранить</button>
    </div>
  </div>
  <div>
    <div class="">
      <input v-model="playerName" type="text" placeholder="Имя игрока" />
      <button @click="addPlayer">Добавить</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerName: "",
      score: 0,
    };
  },
  methods: {
    addPlayer() {
      this.$store.commit("addPlayer", this.playerName);
    },
    setMaxScore() {
      this.$store.commit("setMaxScore", this.score);
    },
  },
};
</script>

<style scoped></style>
