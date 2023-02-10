<template>
  <div>
    <button class="btn" @click="toggleModal">Открыть легенду</button>
    <ModalWindowLegend v-if="isOpenSidebar">
      <div class="legend">
        <LegendElements></LegendElements>
      </div>
      <button class="btn" @click="toggleModal">Закрыть легенду</button>
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

<style scoped>
.btn {
  position: fixed;
  right: 0px;
  top: 70px;
  margin: 10px 0px 0px 10px;
  height: 50px;
  width: 110px;
  border-radius: 5px;
}
</style>
