<template>
  <button class="btn" @click="toggleTheme">
    <f-icon v-if="isDarkTheme" type="moon"></f-icon>
    <f-icon v-else type="sun"></f-icon>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isDarkTheme: false,
      appElement: null,
    };
  },
  mounted() {
    this.appElement = document.getElementById("app");
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      this.appElement.classList.toggle("dark-theme");
    },
  },
};
</script>

<style scoped>
.btn {
  font-size: 30px;
  position: fixed;
  right: 10px;
  top: 10px;
  height: 40px;
  width: 40px;

  border-radius: 5px;
}
</style>
