<template>
  <div class="modal">
    <slot>123124141</slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 800px;
  background-color: #fff;
  text-align: center;
  box-shadow: 100px 100px 100px 100px grey;
}
</style>
