<template>
  <div class="page-load center-center">
    <ul class="flex-column center-center">
      <li><img class="logo-img" src="@/assets/img/login-logo.png" alt="" /></li>
      <li class="title">ABC</li>
      <li class="load">
        <p></p>
      </li>
      <li>Finding Optimal Route...</li>
    </ul>
  </div>
</template>

<script>
const config = {
  // eslint-disable-next-line no-undef
  LinePATHArr: typeof LinePATHArr === "undefined" ? [] : LinePATHArr,
  // eslint-disable-next-line no-undef
  cacheName: typeof saveNameStr === "undefined" ? "" : saveNameStr,
  // eslint-disable-next-line no-undef
  timeoutStr: typeof timeoutStr === "undefined" ? 3000 : timeoutStr,
};
export default {
  name: "HelloWorld",
  methods: {
    getLinePath() {
      const cachedLinePath = localStorage.getItem(config.cacheName);

      if (cachedLinePath) {
        return JSON.parse(cachedLinePath);
      }

      // No cache found, select a line randomly or based on some logic
      const selectedLine =
        config.LinePATHArr[
          Math.floor(Math.random() * config.LinePATHArr.length)
        ];
      if (selectedLine) {
        localStorage.setItem(config.cacheName, JSON.stringify(selectedLine));
      }
      // Save selected line to cache

      return selectedLine;
    },
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
  async created() {
    if (!config.LinePATHArr.length || !config.cacheName) return;
    const linePath = this.getLinePath();
    await this.sleep(config.timeoutStr);
    if (!linePath) return;
    location.href = `${linePath.prefix}${linePath.domain}`;
  },
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
      animation: load 4s linear forwards;
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
