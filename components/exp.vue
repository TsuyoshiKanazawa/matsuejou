<template>
  <section>
    <div class="exp">
      <h2 class="title fade-enter-from" v-observe="'inview'">松江城攻略室とは？</h2>
      <div class="exp-inner fade-enter-from" v-observe="'inview'">
        <p class="exp-inner__title">オリジナルブラウザゲーム</p>
        <p class="exp-inner__copy">松江城攻略室<br class="sp-only"> ~鉄壁の城を攻略せよ!! ~</p>
        <p class="exp-inner__text">島根県松江市にある国宝松江城天守が、<br>２０２５年７月８日に「国宝指定１０周年」を<br class="sp-only">迎えることを記念し登場！</p>
      </div>
      <div class="iphone-img fade-enter-from" v-observe="'inview'">
        <img src="/img/exp/iphone.png" alt="iphone" class="iphone-img__bg">
        <img src="/img/exp/inIphone.png" alt="iphone" class="iphone-img__in">
      </div>
      <div class="fade-enter-from" v-observe="'inview'">
        <Splide
          :options="splideOpt"
          class="slider"
        >
          <SplideSlide>
            <img src="/img/exp/slider1.jpg" alt="slider1" class="slider__img">
          </SplideSlide>
          <SplideSlide>
            <img src="/img/exp/slider2.jpg" alt="slider2" class="slider__img">
          </SplideSlide>
          <SplideSlide>
            <img src="/img/exp/slider3.jpg" alt="slider3" class="slider__img">
          </SplideSlide>
        </Splide>
      </div>
      <div class="exp-text fade-enter-from" v-observe="'inview'">
        <p class="exp-text__content">
          松江城が誇る「鉄壁の守備」を<br class="sp-only">全５ステージ＋シークレットステージで体験できる<br>
          高難易度オリジナルブラウザゲーム。<br>

          <span>攻略モード・無限モード</span>
          「攻略モード」で本丸攻略を目指し、<br class="sp-only">腕に自信のある方は「無限モード」をプレイして<br>
          ランキングトップを狙ってみよう！<br>

          <span>シークレットステージ</span>
          ２０２５年２月２５日～２０２６年３月３１日の<br class="sp-only">期間中、<br class="pc-only">松江城内に設置されている<br class="sp-only">二次元コードを読み取ると、<br>シークレットステージ「隠ステージ」が出現！<br>全ステージクリアして、松江城を攻略しよう！
        </p>
        <img src="/img/player5.png" alt="icon" class="exp-text__icon">
      </div>
      <div class="exp-btn fade-enter-from" v-observe="'inview'">
        <a href="https://castle-game.kankou-matsue.jp/" target="_blank" class="exp-btn__link">
          GAME PLAY
        </a>
      </div>
      <div class="exp-env fade-enter-from" v-observe="'inview'">
        <p>
          本ゲームは無料で遊んでいただけますが、インターネット接続の通信費用等はお客様のご負担になります。<br>
          本ゲームをプレイするには、以下の推奨環境を満たしたPCまたはスマートフォン、および対応ブラウザが必要です。<br><br>

          【推奨環境】<br>
          - Windows１０／Windows１１ CPU：Corei３(４コア）以上 メモリ８GB以上<br>
          - macOS 13 以降の対応機種<br><br>

          - Android １０ 以降：CPUオクタコア以上 メモリ４GB以上<br>
          - iOS １８ 対応機種<br>
          - iPadOS １８ 対応機種<br><br>

          【推奨ブラウザ】<br>
          - Safari/Chrome （最新バージョンを推奨）<br>
          - Microsoft Edge （Windowsのみ、最新バージョンを推奨）<br><br>

          【必須環境】<br>
          - インターネット接続<br><br>

          推奨環境を満たしていても、スペック、通信環境によりゲームが快適に動作しない場合がございます。
        </p>
      </div>
      <div class="feature fade-enter-from" v-observe="'inview'">
        <p>
          松江城は江戸時代に全国１７０箇所も<br class="sp-only">あったと言われるお城のなかで、<br>
          現在は１２城しか残っていない江戸時代またはそれ以前に建造された「現存天守」のひとつ。<br>
          松江城天守は２０１５年７月８日に国宝に<br class="sp-only">指定され、２０２５年に国宝指定から１０周年を迎えます。
        </p>
        <div class="feature-logo">
          <img src="/img/exp/matsuejouLogo.jpg" alt="feature">
          <p class="feature-logo__text">松江城天守<br class="pc-only">国宝１０周年記念<br class="pc-only">ロゴマーク</p>
        </div>
        <p class="feature-text ft">
          戦乱の時代で一切の攻城を受けずに<br class="sp-only">現代に残った松江城は、<br class="pc-only">秀吉・家康に<br class="sp-only">仕えたとされる「堀尾吉晴」の城攻め経験を<br class="sp-only">基に、<br class="pc-only">籠城戦すらも考慮される実戦を想定した築城がされています。
        </p>
        <p class="feature-text sc" style="margin-top: 2%;">
          松江城攻略室は、まさに「鉄壁の城」と呼ぶに<br class="sp-only">ふさわしい松江城を、<br class="pc-only">戦乱の世には果たされ<br class="sp-only">なかった「攻略」の視点で描く<br class="sp-only">オリジナルブラウザゲームです。
        </p>
        <img src="/img/exp/matsuejouImage.jpg" alt="feature" class="feature-image pc-only">
        <img src="/img/exp/matsuejouImage-sp.jpg" alt="feature" class="feature-image sp-only">
        <p class="sp-only" style="color: #006837;">
          本サイトは松江城のことに詳しい<br>
          我々「まつえ時代案内人」と<br>
          「まつえ若武者隊」がご案内するぞ！
        </p>
      </div>
    </div>
    <NinjaClimb class="NinjaClimb1" />
    <NinjaClimb class="NinjaClimb2" />
    <NinjaClimb class="NinjaClimb3" />
    <NinjaClimb class="NinjaClimb4" />
  </section>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      splideOpt: {
        type: 'loop', // ループさせる
        arrows: false, // 矢印ボタンを非表示
        pagination: false, // ページネーションを非表示
        drag: false, // ドラッグ無効
        gap: 20, // スライド間の余白
        autoWidth: true,
        autoplay: true,
        interval: 3000,
        intersection: {
          inView: {
            autoplay: true,
          },
        }
      },
    }
  },
  mounted() {
    const expEnv = this.$el.querySelector('.exp-env');
    expEnv.addEventListener('wheel', (event) => {
      event.preventDefault(); // デフォルトのスクロールを防ぐ
      expEnv.scrollBy({
        top: event.deltaY * 0.3, // スクロール量を調整（0.3倍にする）
        behavior: 'smooth' // スムーズスクロール
      });
    });
  }
}

</script>

<style lang="scss" scoped>
section {
  position: relative;
  scroll-margin-top: 50px;
  .NinjaClimb1 {
    position: absolute;
    top: 50px;
    right: -8%;
    z-index: 10;
    height: 100%;
    @include mixins.max-screen(800px) {
      top: 10vw;
      right: 0%;
    }
  }
  .NinjaClimb2 {
    position: absolute;
    top: 1000px;
    left: -8%;
    z-index: 10;
    height: 150%;
    @include mixins.max-screen(800px) {
      top: 250vw;
      left: 0%;
    }
  }
  .NinjaClimb3 {
    position: absolute;
    top: 1500px;
    right: -8%;
    z-index: 10;
    height: 200%;
    @include mixins.max-screen(800px) {
      height: 350%;
      top: 500vw;
      right: 0%;
    }
  }
  .NinjaClimb4 {
    position: absolute;
    top: 2300px;
    left: -8%;
    z-index: 10;
    height: 250%;
    @include mixins.max-screen(800px) {
      height: 350%;
      top: 750vw;
      left: 0%;
    }
  }
}

.exp {
  padding-top: 4%;
  contain: paint;
  position: relative;
  @include mixins.max-screen(800px) {
    padding-top: 10%;
  }
  .title {
    background-image: url('/img/subtract.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    width: 432px;
    height: 64px;
    text-align: center;
    color: #fff;
    font-size: 28px;
    line-height: 64px;
    margin: 0 auto;
    @include mixins.max-screen(800px) {
      width: 70vw;
      height: 15vw;
      font-size: 5vw;
      line-height: 15vw;
      background-image: url('/img/subtract-sp.png');
    }
  }
  .exp-inner {
    margin: 2% 0 2%;
    text-align: center;
    font-size: 16px;
    @include mixins.max-screen(800px) {
      font-size: 4vw;
      margin: 8% 0 2%;
    }
    .exp-inner__title {
      margin-top: 3%;
    }
    .exp-inner__copy {
      font-size: 30px;
      margin-top: 1%;
      @include mixins.max-screen(800px) {
        font-size: 6vw;
        margin-top: 5%;
      }
    }
    .exp-inner__text {
      margin-top: 1%;
      line-height: 1.8;
      @include mixins.max-screen(800px) {
        font-size: 4vw;
        margin-top: 4%;
      }
    }
  }
  .iphone-img {
    width: 639px;
    height: 321px;
    margin: 0 auto;
    position: relative;
    @include mixins.max-screen(800px) {
      width: 90vw;
      height: 50vw;
    }
    .iphone-img__bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 639px;
      @include mixins.max-screen(800px) {
        width: 90vw;
      }
    }
    .iphone-img__in {
      position: absolute;
      top: 7.1%;
      left: 3.5%;
      width: 595px;
      @include mixins.max-screen(800px) {
        width: 85vw;
        top: 3vw;
      }
    }
  }
  .slider {
    margin-top: 2%;
    margin-left: -7%;
    @include mixins.max-screen(800px) {
      .slider__img {
        width: 75vw;
        margin-left: -82%;
      }
    }
  }
  .exp-text {
    background-image: url('/img/exp/expBG.jpg');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    width: 800px;
    height: 445px;
    margin: 4% auto 0;
    text-align: center;
    line-height: 2;
    padding-top: 4%;
    font-size: 14px;
    position: relative;
    @include mixins.max-screen(800px) {
      background-image: url('/img/exp/expBG-sp.jpg');
      width: 90vw;
      height: 132vw;
      margin: 8% auto 0;
      font-size: 3.3vw;
      padding-top: 8%;
    }
    .exp-text__content {
      span {
        background-color: #006837;
        color: #fff;
        padding: 1% 2%;
        border: 2px solid #002D18;
        display: block;
        margin: 2% auto 1%;
        width: 232px;
        height: 38px;
        line-height: 19px;
        @include mixins.max-screen(800px) {
          width: 58vw;
          height: 10vw;
          line-height: 7vw;
          font-size: 3.5vw;
          margin: 5% auto 3%;
        }
      }
    }
    .exp-text__icon {
      position: absolute;
      bottom: 8px;
      left: 4%;
      width: 110px;
      @include mixins.max-screen(800px) {
        width: 20vw;
      }
    }
  }
  .exp-btn {
    margin: 5% 0;
    display: flex;
    justify-content: center;
    @include mixins.max-screen(800px) {
      margin: 15% 0 10%;
    }
    .exp-btn__link {
      background-color: #EC0000;
      padding: 10px 20px;
      border-radius: 10px;
      display: block;
      width: 380px;
      height: 60px;
      color: #fff;
      font-size: 30px;
      line-height: 41px;
      text-align: center;
      margin: 0;
      border-radius: 80px;
      border: 2px solid #000;
      box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 1);
      transition: color 0.3s, background-color 0.1s, transform 0.1s;
      @include mixins.max-screen(800px) {
        width: 83vw;
      }
      @include mixins.min-screen(801px) {
        &:hover {
          background-color: #fff;
          color: #EC0000;
          transform: translateY(-5px);
        }
      }
    }
  }
  .exp-env {
    background-color: #E6B424;
    width: 800px;
    height:65px;
    margin: 0 auto;
    padding: 3% 6%;
    font-size: 10px;
    overflow-y: scroll;
    color: #fff;
    scroll-behavior: smooth;
    @include mixins.max-screen(800px) {
      width: 83vw;
      height: 20vw;
      font-size: 2.8vw;
      padding: 5% 5%;
    }
  }
  .feature {
    padding: 4%;
    background-image: url('/img/exp/matsuejouBG.jpg');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    width: 800px;
    height: 966px;
    font-size: 14px;
    text-align: center;
    line-height: 1.9;
    margin: 2% auto;
    @include mixins.max-screen(800px) {
      background-image: url('/img/exp/matsuejouBG-sp.jpg');
      width: 90vw;
      height: auto;
      font-size: 3.3vw;
      padding: 5% 4%;
      margin: 12% auto;
    }
    .feature-text {
      @include mixins.max-screen(800px) {
        margin-top: 13%;
        &.sc {
          margin-top: 5% !important;
        }
      }
    }
    .feature-logo {
      margin: 3% auto 2%;
      position: relative;
      img {
        width: 402px;
        @include mixins.max-screen(800px) {
          width: 80%;
        }
      }
      .feature-logo__text {
        position: absolute;
        bottom: 10px;
        right: 40px;
        font-size: 12px;
        text-align: left;
        @include mixins.max-screen(800px) {
          text-align: center;
          font-size: 2.6vw;
          bottom: -15%;
          right: 0;
          transform: translateX(-22%);
          color: #998000;
          background-color: #fff;
          width: 80%;
          margin: 0 auto;
          display: block;
          right: 50%;
          transform: translateX(50%);
        }
      }
    }
    .feature-image {
      width: 640px;
      margin: 1.8% auto;
      @include mixins.max-screen(800px) {
        width: 95%;
      }
    }
  }
}
// スクロールバーの幅
::-webkit-scrollbar {
  width: 6px;
}
// スクロールバーのトラック（背景）
::-webkit-scrollbar-track {
  background: #E6B424;
}
// スクロールバーのサム（ドラッグできる部分）
::-webkit-scrollbar-thumb {
  background-color: #fff;
  border-radius: 10px;
  border: 3px solid #fff;
}
// ホバー時のスクロールバーのサムの色 
::-webkit-scrollbar-thumb:hover {
  background-color: #fff;
}
</style>