<template>
  <div>
    <button @click="toggleModal">Открыть легенду</button>
    <ModalWindowLegend v-if="isOpenSidebar">
      <div class="legend">
        <LegendElements></LegendElements>
      </div>
      <button @click="toggleModal">Закрыть легенду</button>
    </ModalWindowLegend>
  </div>
</template>

<script>
import ModalWindowLegend from "@/components/ModalWindowLegend.vue";
import LegendElements from "@/components/LegendElements.vue";

export default {
  components: {
    LegendElements,
    ModalWindowLegend,
  },

  data() {
    return {
      isOpenSidebar: false,
    };
  },

  methods: {
    toggleModal() {
      this.isOpenSidebar = !this.isOpenSidebar;
    },
  },
};
</script>

<style scoped></style>
