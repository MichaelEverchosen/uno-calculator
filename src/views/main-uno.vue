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
    <div>
      <GameLegend></GameLegend>
    </div>
  </div>
</template>

<script>
import GameSettings from "@/components/GameSettings.vue";
import GameTable from "@/components/GameTable.vue";
import HistoryRounds from "@/components/HistoryRounds.vue";
import GameLegend from "@/components/GameLegend.vue";

export default {
  components: {
    GameSettings,
    GameTable,
    HistoryRounds,
    GameLegend,
  },
};
</script>

<style scoped>
.uno {
  display: grid;
  grid-template-columns: auto auto 100px;
}
</style>
