<template>
  <div class="uno">
    <div class="">
      <div class="title">Uno</div>
      <GameSettings></GameSettings>
      <GameTable></GameTable>
    </div>
    <div>
      <HistoryRounds></HistoryRounds>
    </div>
  </div>
</template>

<script>
import GameSettings from "@/components/GameSettings.vue";
import GameTable from "@/components/GameTable.vue";
import HistoryRounds from "@/components/HistoryRounds.vue";

export default {
  components: {
    GameSettings,
    GameTable,
    HistoryRounds,
  },
};
</script>

<style scoped>
.uno {
  display: grid;
  grid-template: auto/ 1fr 1fr;
}
</style>
