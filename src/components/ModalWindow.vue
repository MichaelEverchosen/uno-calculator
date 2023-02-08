<template>
  <div class="modal-wrap">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.modal-wrap {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  padding: 20px;
  background-color: #fff;
  border: 1px solid rgb(55, 55, 55);
  border-radius: 5px;
  text-align: center;
}
</style>
