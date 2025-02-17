<template>
  <div class="index">
    <div>
      <Fv id="fv" />
      <div class="contents">
        <div class="border">
          <Exp id="about" loading="lazy" />
          <div class="float">
            <div class="float-button__wrapper">
              <img src="/img/musha.png" alt="play" class="musha">
              <a class="float-button" href="#about">
                <p style="font-size: 14px;">鉄壁の城を攻略せよ!!</p>
                <p style="font-size: 30px; margin-top: -9px;">GAME PLAY</p>
              </a>
            </div>
            <Feature id="castle" loading="lazy" />
            <Guide id="matsue-musha" loading="lazy" />
            <!--<Highlight id="highlight" loading="lazy" />-->
            <Events id="events" loading="lazy" />
            <Spot id="explore" loading="lazy" />
            <Ranking id="scoreboard" loading="lazy" />
            <div class="spacer sp-only" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  setup() {
    onMounted(() => {
      document.body.style.overflowX = "hidden";
    });
  },
  data() {
    return {
    }
  },
  mounted() {
    console.log(document.body.scrollWidth > document.documentElement.clientWidth);
    if (window.location.hash === '#castle') {
      // DOMの描画が完了した後に、対象要素へスクロールさせる
      this.$nextTick(() => {
        const scoreboardElement = document.getElementById('castle')
        if (scoreboardElement) {
          scoreboardElement.scrollIntoView({
            block: 'start'      // 要素の先頭までスクロール
          })
        }
      })
    } else if (window.location.hash === '#matsue-musha') {
      this.$nextTick(() => {
        const matsueMushaElement = document.getElementById('matsue-musha')
        if (matsueMushaElement) {
          matsueMushaElement.scrollIntoView({
            block: 'start'
          })
        }
      })
    } else if (window.location.hash === '#highlight') {
      this.$nextTick(() => {
        const castleElement = document.getElementById('highlight')
        if (castleElement) {
          castleElement.scrollIntoView({
            block: 'start'
          })
        }
      })
    } else if (window.location.hash === '#events') {
      this.$nextTick(() => {
        const aboutElement = document.getElementById('events')
        if (aboutElement) {
          aboutElement.scrollIntoView({
            block: 'start'
          })
        }
      })
    } else if (window.location.hash === '#explore') {
      this.$nextTick(() => {
        const eventsElement = document.getElementById('explore')
        if (eventsElement) {
          eventsElement.scrollIntoView({
            block: 'start'
          })
        }
      })
    } else if (window.location.hash === '#scoreboard') {
      this.$nextTick(() => {
        const eventsElement = document.getElementById('scoreboard')
        if (eventsElement) {
          eventsElement.scrollIntoView({
            block: 'start'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  background-color: #383838;
  display: flex;
  justify-content: center;
  .contents {
    position: relative;
    width: 1120px;
    background-image: url('/img/contentsBG.jpg');
    background-size: contain;
    background-repeat: repeat-y;
    border-left: 3px solid #002D18;
    border-right: 3px solid #002D18;
    .border {
      border-left: 3px solid #006837;
      border-right: 3px solid #006837;
      padding-bottom: 6%;
      .float-button__wrapper {
        position: sticky;
        top: 80%;
        z-index: 99;
        @include mixins.max-screen(800px) {
          top: 88%;
        }
        .float-button {
          display: block;
          margin-right: 1%;
          margin-left: auto;
          cursor: pointer;
          background-color: #EC0000;
          padding: 10px;
          border-radius: 80px;
          width: 240px;
          height: 70px;
          color: #fff;
          text-align: center;
          line-height: 1.5;
          border: 2px solid #000;
          box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 1);
          transition: color 0.3s, background-color 0.1s, transform 0.1s;
          &:hover {
            background-color: #fff;
            color: #EC0000;
            transform: translateY(-5px);
          }
        }
        .musha {
          width: 94px;
          position: absolute;
          top: -86px;
          right: 4%;
          z-index: -10;
        }
      }
    }
    @include mixins.max-screen(800px) {
      width: 100vw;
      background-image: url('/img/contentsBG-sp.jpg');
      border-left: none;
      border-right: none;
    }
  }
  .spacer {
    height: 30vw;
  }
}
</style>

