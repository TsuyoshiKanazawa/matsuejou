<template>
  <header>
    <a href="#about" class="text-hover">松江城攻略室とは？</a>
    /
    <a href="#castle" class="text-hover">松江城の特徴</a>
    /
    <a href="#matsue-musha" class="text-hover">時代案内人・若武者隊</a>
    /
    <a href="#events" class="text-hover">関連イベント</a>
    /
    <a href="#explore" class="text-hover">周辺スポット</a>
    /
    <a href="#scoreboard" class="text-hover">スコアボード</a>
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
