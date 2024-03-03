<template>
  <div class="page-load center-center">
    <ul class="flex-column center-center">
      <li><img class="logo-img" src="@/assets/img/logo.webp" alt="" /></li>
      <li class="title">BHB</li>

      <li>Finding Optimal Route...</li>
    </ul>
  </div>
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
  color: #fff;
  .title {
    font-size: 27px;
    padding: 10px 0 18px;
  }
  .logo-img {
    display: block;
    width: 120px;
    height: 120px;
  }
}
</style>
