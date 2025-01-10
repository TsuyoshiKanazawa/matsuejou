<template>
  <header>
    <a href="#exp" class="text-hover">松江城攻略室とは？</a>
    /
    <a href="#feature" class="text-hover">松江城の特徴</a>
    /
    <a href="#guide" class="text-hover">時代案内人・若武者隊</a>
    /
    <a href="#events" class="text-hover">イベント・スポット</a>
    /
    <a href="#ranking" class="text-hover">スコアボード</a>
    /
    <a href="/" class="text-hover">関連情報</a>
  </header>
</template>

<script>
export default {
  setup() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
  gap: 1.5%;
  background-image: url('/img/headerBg.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  top: 3%;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 960px;
  height: 51px;
  z-index: 100;
  line-height: 51px;
  a {
    font-size: 14px;
  }
}
</style>
