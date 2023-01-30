<template>
  <div>
    <div class="title">Uno</div>
    <GameSettings></GameSettings>
    <GameTable></GameTable>
  </div>
</template>

<script>
import GameSettings from "@/components/GameSettings.vue";
import GameTable from "@/components/GameTable.vue";

export default {
  components: {
    GameSettings,
    GameTable,
  },
};
</script>

<style></style>
