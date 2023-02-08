<template>
  <div class="gameSetting">
    <div>
      <input
        class="data-field-input"
        v-model="score"
        type="number"
        placeholder="Максимальное количество очков от 200 до 1000"
      />
      <button
        class="button-editing"
        @click="setMaxScore"
        :disabled="isCanSetMaxScore"
      >
        Сохранить
      </button>
    </div>
    <div class="">
      <input
        class="data-field-input"
        v-model="playerName"
        type="text"
        placeholder="Имя игрока"
      />
      <button
        class="button-editing"
        @click="addPlayer"
        :disabled="isCanAddPlayer"
      >
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
    isCanAddPlayer() {
      return !this.playerName.length;
    },
    isCanSetMaxScore() {
      return !(
        this.score >= 200 &&
        this.score <= 1000 &&
        !isNaN(this.score) &&
        this.score !== ""
      );
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
.button-editing {
  margin-left: 20px;
  height: 45px;
  width: 150px;
  border: 3px;
  border-radius: 5px;
}
</style>
