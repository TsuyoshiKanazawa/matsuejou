<template>
  <header class="header-pc" v-if="windowSize.width > 800">
    <a href="#about" class="text-hover" >松江城攻略室とは？</a>
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
  <header class="header-sp" v-if="windowSize.width < 800">
    <div class="humberger" @click="toggleMenu" :class="{ 'active': isMenuOpen }"></div>
    <div class="menu-wrapper" :class="{ 'active': isMenuOpen }">
      <div class="menu-item">
        <a href="#about" class="text-hover" @click="toggleMenu">松江城攻略室とは？</a>
        <a href="#castle" class="text-hover" @click="toggleMenu">松江城の特徴</a>
        <a href="#matsue-musha" class="text-hover" @click="toggleMenu">時代案内人・若武者隊</a>
        <a href="#events" class="text-hover" @click="toggleMenu">関連イベント</a>
        <a href="#explore" class="text-hover" @click="toggleMenu">周辺スポット</a>
        <a href="#scoreboard" class="text-hover" @click="toggleMenu">スコアボード</a>
      </div>
    </div>
  </header>
</template>


<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  setup() {
    const getWindowSize = () => {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    };

    const windowSize = ref(getWindowSize());
    const updateWindowSize = () => {
      windowSize.value = getWindowSize();
    };

    onMounted(() => {
      window.addEventListener('resize', updateWindowSize);
    });

    // コンポーネントが破棄される際にリスナーを解除
    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateWindowSize);
    });
    return {
      windowSize
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>


<style lang="scss" scoped>
.header-pc {
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
    font-size: min(1.3vw, 14px);
  }
}
.header-sp {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  .humberger {
    width: 40px;
    height: 3px;
    background-color: #fff;
    display: block;
    margin: 30px 10px 0 auto;
    position: relative;
    transition: 0.1s ease-in-out;
    z-index: 100;
    &::before {
      content: '';
      display: block;

      width: 100%;
      height: 100%;
      background-color: #fff;
      position: absolute;
      top: 11px;
      left: 0;
      transition: transform 0.1s ease-in-out;
    }
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background-color: #fff;
      position: absolute;
      top: -11px;
      left: 0;
      transition: transform 0.1s ease-in-out;
    }
    &.active {
      background-color: transparent;
      &::before {
        transform: rotate(-45deg) translateY(-11px) translateX(5px);
        background-color: #000;
      }
      &::after {
        transform: rotate(45deg) translateY(11px) translateX(5px);
        background-color: #000;
      }
    }
  }
  .menu-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80vh;
    opacity: 0;
    visibility: hidden;
    background-color: #fff;
    z-index: 99;
    transition: opacity 0.1s ease-in-out, visibility 0.1s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('/img/menuBG.jpg');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    &.active {
      opacity: 1;
      visibility: visible;
    }
    .menu-item {
      display: flex;
      justify-content: center;
      align-items: left;
      flex-direction: column;
      gap: 6vh;
      margin-top: -5%;
      a {
        font-size: min(5.5vw,34px);
      }

    }
  }
}
</style>

