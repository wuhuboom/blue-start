<template>
  <div class="page-load"></div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.page-load {
  height: 100vh;
  background: url("@/assets/img/bg.webp") no-repeat center top;
  background-size: cover;
  max-width: 750px;
  margin: 0 auto;
}
</style>
