<template>
  <div class="page-load center-center">
    <div class="loading_mod2">
      <div class="loader">
        <div class="loading_box">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <p class="label">{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
const config = {
  // eslint-disable-next-line no-undef
  LinePATHArr: typeof BASE_PATH_ARR === "undefined" ? [] : BASE_PATH_ARR,
  // eslint-disable-next-line no-undef
  cacheName: typeof saveNameStr === "undefined" ? "bhb-linePath" : saveNameStr,
  // eslint-disable-next-line no-undef
  timeoutStr: typeof LOADING_TIME === "undefined" ? 3000 : LOADING_TIME,
};
console.log(config);
//window.LOADING_TEXT = "Please wait..."
export default {
  name: "HelloWorld",
  data() {
    return {
      title: window.LOADING_TEXT || "Please wait...",
    };
  },
  methods: {
    getLinePath() {
      const cachedLinePath = localStorage.getItem(config.cacheName);

      if (cachedLinePath) {
        return cachedLinePath;
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
    console.log(linePath);
    // location.href = "https://www.google.com"
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.page-load {
  height: 100vh;
  background: url("@/assets/img/BG.c8edb10a.png") no-repeat center top;
  background-size: cover;
  max-width: 750px;
  margin: 0 auto;
  color: #fff;
}
.loading_mod2 {
  margin-top: 43vh;
  width: 100%;

  .loader {
    width: 100%;
    height: 180px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 30px;
    box-sizing: border-box;
  }

  .loading_box {
    width: 50%;
    height: 10px;
    background: #444444;
    border-radius: 0;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 10px;
      background-image: linear-gradient(180deg, #e8fcff, #48bcfd 50%, #e8fcff);
      border-radius: 0;
      z-index: 1;
      animation: loading 1.2s alternate infinite;
    }
  }

  .label {
    font-size: 32rpx;
    color: #fff;
    animation: bit 1.2s alternate infinite;
  }

  ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 10px;
    padding: 0;
    margin: 0;

    li {
      background-color: #000000a3;
      width: 4px;
      height: 10px;
    }
  }
}

@keyframes bit {
  from {
    opacity: 0.3;
  }

  to {
    opacity: 1;
  }
}

@keyframes loading {
  0% {
    left: 25%;
  }

  100% {
    left: 50%;
  }

  0% {
    left: 0%;
  }
}
</style>
