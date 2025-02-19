<template>
  <div class="index">
    <div>
      <Fv id="fv" />
      <div class="contents">
        <div class="border">
          <Exp id="about" loading="lazy" />
          <div class="float">
            <div v-if="windowWidth > 800" class="float-button__wrapper">
              <img src="/img/musha.png" alt="play" class="musha">
              <a class="float-button" href="#about">
                <p class="float-button__title">鉄壁の城を攻略せよ!!</p>
                <p class="float-button__play">GAME PLAY</p>
              </a>
            </div>
            <div v-if="windowWidth <= 800" class="float-button__wrapper__sp">
              <a class="float-button" href="#about">
                <p class="float-button__title">鉄壁の城を攻略せよ!!</p>
                <p class="float-button__play">GAME PLAY</p>
                <img src="/img/musha.png" alt="play" class="musha">
              </a>
            </div>
            <Feature id="castle" loading="lazy" />
            <Guide id="matsue-musha" loading="lazy" />
            <!--<Highlight id="highlight" loading="lazy" />-->
            <Events id="events" loading="lazy" />
            <Spot id="explore" loading="lazy" />
            <Ranking id="scoreboard" loading="lazy" />
            <div class="spacer sp-only" />
            <div class="float-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const windowWidth = ref(window.innerWidth);
    const handleResize = () => {
      windowWidth.value = window.innerWidth;
    };
    
    let observerFloat = null;
    let observerBottom = null;
    
    onMounted(() => {
      window.addEventListener('resize', handleResize);
      
      // SP表示の場合のみ動作させる
      if (window.innerWidth <= 800) {
        const floatEl = document.querySelector('.float');
        const spWrapper = document.querySelector('.float-button__wrapper__sp');
        const floatBottom = document.querySelector('.float-bottom');
        
        // Observer1: .float 自体の表示判定
        observerFloat = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            // .float が画面内に入ったら active を追加、画面外なら除去
            if (entry.isIntersecting) {
              spWrapper.classList.add('active');
            } else {
              spWrapper.classList.remove('active');
            }
          });
        }, { threshold: [0, 0.1] });
        observerFloat.observe(floatEl);
        
        // Observer2: .float の最下部（.float-bottom）の表示判定
        observerBottom = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // float の最下部が見えたら active を除去
              spWrapper.classList.remove('active');
            } else {
              // もし float は表示中で、かつ最下部が画面外なら active を付与
              const floatRect = floatEl.getBoundingClientRect();
              if (floatRect.top < window.innerHeight && floatRect.bottom > 0) {
                spWrapper.classList.add('active');
              }
            }
          });
        }, { threshold: 0.1 });
        observerBottom.observe(floatBottom);
      }
    });
    
    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize);
      if (observerFloat) observerFloat.disconnect();
      if (observerBottom) observerBottom.disconnect();
    });
    
    return { windowWidth };
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
  @include mixins.max-screen(800px) {
    display: block;
  }
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
      @include mixins.max-screen(800px) {
        padding-bottom: 0;
        border-left: 2px solid #002D18;
        border-right: 2px solid #002D18;
      }
      .float {
        .float-button__wrapper {
          position: sticky;
          z-index: 99;
          top: 80%;
          @include mixins.max-screen(800px) {
            display: none;
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
            @include mixins.max-screen(800px) {
              width: 100%;
              height: 16vw;
              font-size: 10vw;
              padding: 0 3vw;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              border: 0.7vw solid #000;
              border-radius: 0;
              border-top-left-radius: 5vw;
              border-top-right-radius: 5vw;
              box-shadow: none;
              line-height: 13vw;
            }
            .float-button__title {
              font-size: 14px;
              @include mixins.max-screen(800px) {
                font-size: 3.5vw;
              }
            }
            .float-button__play {
              font-size: 30px;
              margin-top: -9px;
              @include mixins.max-screen(800px) {
                font-size: 7vw;
                margin: 0 0 0 2vw;
              }
            }
            @include mixins.min-screen(801px) {
              &:hover {
                background-color: #fff;
                color: #EC0000;
                transform: translateY(-5px);
              }
            }
          }
          .musha {
            width: 94px;
            position: absolute;
            top: -86px;
            right: 4%;
            z-index: -10;
            @include mixins.max-screen(800px) {
              width: 13vw;
              top: 2vw;
              right: 4vw;
              z-index: 10;
            }
          }
        }
        .float-button__wrapper__sp {
          position: fixed;
          bottom: 0;
          width: 99vw;
          z-index: 99;
          transition: .3s;
          opacity: 0;
          transform: translateY(100%);
          .float-button {
            width: 100%;
            height: 13vw;
            font-size: 10vw;
            padding: 0 4vw;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            background-color: #EC0000;
            color: #fff;
            border: 0.7vw solid #000;
            border-bottom: none;
            border-radius: 0;
            border-top-left-radius: 5vw;
            border-top-right-radius: 5vw;
            box-shadow: none;
            line-height: 13vw;
            .float-button__title {
              font-size: 3.5vw;
            }
            .float-button__play {
              font-size: 7.3vw;
              margin: 0 0 0 2vw;
            }
          }
          .musha {
            width: 10vw;
            position: absolute;
            top: 2vw;
            right: 4vw;
            z-index: 10;
          }
          &.active {
            opacity: 1;
            transform: translateY(0);
          }
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
    height: 33vw;
  }
  .float-bottom {
    height: 1px;
  }
}
</style>

