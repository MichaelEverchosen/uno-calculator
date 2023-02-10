<template>
  <div id="bg">
    <RouterView />
    <ThemeToggler></ThemeToggler>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import ThemeToggler from "./components/ThemeToggler.vue";

export default {
  components: {
    ThemeToggler,
  },
};
</script>

<style scoped></style>
