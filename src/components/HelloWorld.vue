<template>
  <div class="page-load center-center">
    <ul class="flex-column center-center">
      <li><img class="logo-img" src="@/assets/img/logo.webp" alt="" /></li>
      <li class="title">BHB</li>
      <li class="load">
        <p></p>
      </li>
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
    padding: 10px 0 10px;
  }
  .logo-img {
    display: block;
    width: 120px;
    height: 120px;
  }
  .load {
    height: 6px;
    width: 194px;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.3);
    margin-bottom: 16px;
    position: relative;
    overflow: hidden;
    P {
      position: absolute;
      border-radius: 3px;
      top: 0;
      left: 0;
      height: 100%;
      width: 0;
      background: #fff;
      animation: load 10s linear forwards;
      @keyframes load {
        0% {
          width: 0;
        }
        50% {
          width: 50%;
        }
        100% {
          width: 100%;
        }
      }
    }
  }
}
</style>
