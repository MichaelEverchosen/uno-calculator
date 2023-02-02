<template>
  <div>
    <button @click="toggleModal">Открыть легенду</button>
    <ModalWindowLegend v-if="isOpenSidebar">
      <div>
        В этой легенде будет очень много интересного, но пока нифига тут нет!
      </div>
      <button @click="toggleModal">Закрыть легенду</button>
    </ModalWindowLegend>
  </div>
</template>

<script>
import ModalWindowLegend from "@/components/ModalWindowLegend.vue";

export default {
  components: {
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

<style></style>
