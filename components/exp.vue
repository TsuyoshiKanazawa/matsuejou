<template>
  <section>
    <div class="exp">
      <h2 class="title fade-enter-from" v-observe="'inview'">松江城攻略室とは？</h2>
      <div class="exp-inner fade-enter-from" v-observe="'inview'">
        <p class="exp-inner__title">オリジナルブラウザゲーム</p>
        <p class="exp-inner__copy">松江城攻略室 ~鉄壁の城を攻略せよ!! ~</p>
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
          島根県松江市にある国宝松江城天守が、<br>
          2025年7月8日に「国宝指定10周年」を迎えることを記念し登場！<br>
          松江城が誇る「鉄壁の守備」を全5ステージ＋シークレットステージで体験できる<br>
          高難易度オリジナルブラウザゲーム。<br>
          「攻略モード」で本丸攻略を目指し、腕に自信のある方は「無限モード」をプレイして<br>
          ランキングトップを狙ってみよう！<br>
          2025年2月25日～2026年3月31の期間中、<br>
          松江城内に設置されている二次元バーコードを読み取ると、<br>
          シークレットステージ「隠ステージ」が出現！<br>
          全ステージクリアして。松江城を攻略しよう！
        </p>
        <img src="/img/player5.png" alt="icon" class="exp-text__icon">
      </div>
      <div class="exp-btn fade-enter-from" v-observe="'inview'">
        <a href="/" class="exp-btn__link">
          GAME PLAY
        </a>
      </div>
      <div class="exp-env fade-enter-from" v-observe="'inview'">
        <p>
          本ゲームは無料で遊んでいただけますが、インターネット接続の通信費用等はお客様のご負担になります。<br>
          本ゲームをプレイするには、以下の推奨環境を満たしたPCまたはスマートフォン、および対応ブラウザが必要です。<br><br>

          【推奨環境】<br>
          - Windows10／Windows11 CPU：Corei3(４コア）以上 メモリ8GB以上<br>
          - macOS 13 以降の対応機種<br><br>

          - Android 10 以降：CPUオクタコア以上 メモリ4GB以上<br>
          - iOS 18 対応機種<br>
          - iPadOS 18 対応機種<br><br>

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
          松江城は江戸時代に全国170箇所もあったと言われるお城のなかで、<br>
          現在は12城しか残っていない江戸時代またはそれ以前に建造された「現存天守」のひとつ。<br>
          松江城天守は2015年7月8日に国宝に指定され、2025年に国宝指定から10周年を迎えます。
        </p>
        <div class="feature-logo">
          <img src="/img/exp/matsuejouLogo.png" alt="feature">
        </div>
        <p>
          戦乱の時代で一切の攻城を受けずに現代に残った松江城は、<br>
          信長・秀吉・家康に仕えたとされる「堀尾吉晴」の城攻め経験を基に、<br>
          籠城戦すらも考慮される実戦を想定した築城がされています。
        </p>
        <p style="margin-top: 2%;">
          松江城攻略室は、まさに「鉄壁の城」と呼ぶにふさわしい松江城を、<br>
          戦乱の世には果たされなかった「攻略」の視点で描くオリジナルブラウザゲームです。
        </p>
        <img src="/img/exp/matsuejouImage.jpg" alt="feature" class="feature-image">
      </div>
    </div>
    <NinjaClimb class="NinjaClimb1" />
    <NinjaClimb class="NinjaClimb2" />
    <NinjaClimb class="NinjaClimb3" />
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

}

</script>

<style lang="scss" scoped>
section {
  position: relative;
  .NinjaClimb1 {
    position: absolute;
    top: 50px;
    right: -8%;
    z-index: 10;
    height: 100%;
  }
  .NinjaClimb2 {
    position: absolute;
    top: 1000px;
    left: -8%;
    z-index: 10;
    height: 150%;
  }
  .NinjaClimb3 {
    position: absolute;
    top: 1500px;
    right: -8%;
    z-index: 10;
    height: 200%;
  }
}

.exp {
  padding-top: 4%;
  contain: paint;
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
  }
  .exp-inner {
    margin-top: 2%;
    text-align: center;
    .exp-inner__title {
      font-size: 16px;
      margin-top: 3%;
    }
    .exp-inner__copy {
      font-size: 20px;
      margin-top: 1%;
    }
  }
  .iphone-img {
    width: 639px;
    height: 321px;
    margin: 0 auto;
    position: relative;
    .iphone-img__bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 639px;
    }
    .iphone-img__in {
      position: absolute;
      top: 7.2%;
      left: 3.5%;
      width: 595px;
    }
  }
  .slider {
    margin-top: 2%;
    margin-left: -10%;
  }
  .exp-text {
    background-image: url('/img/exp/expBG.jpg');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    width: 800px;
    height: 371px;
    margin: 4% auto 0;
    text-align: center;
    line-height: 2;
    padding-top: 4%;
    font-size: 14px;
    position: relative;
    .exp-text__icon {
      position: absolute;
      bottom: 8px;
      left: 4%;
      width: 110px;
    }
  }
  .exp-btn {
    margin: 5% 0;
    display: flex;
    justify-content: center;
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
      &:hover {
        background-color: #fff;
        color: #EC0000;
        transform: translateY(-5px);
      }
    }
  }
  .exp-env {
    background-color: #fff;
    width: 800px;
    height: 100px;
    margin: 0 auto;
    padding: 2% 6%;
    font-size: 10px;
    overflow-y: scroll;
  }
  .feature {
    padding: 4%;
    background-image: url('/img/exp/matsuejouBG.jpg');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    width: 800px;
    height: 869px;
    font-size: 12px;
    text-align: center;
    line-height: 2;
    margin: 2% auto;
    .feature-logo {
      margin: 3% auto;
      img {
        width: 310px;
      }
    }
    .feature-image {
      width: 640px;
      margin: 2% auto;
      border: 2px solid #002D18;
    }
  }
}
// スクロールバーの幅
::-webkit-scrollbar {
  width: 11px;
}
// スクロールバーのトラック（背景）
::-webkit-scrollbar-track {
  background: #fff;
}
// スクロールバーのサム（ドラッグできる部分）
::-webkit-scrollbar-thumb {
  background-color: #666;
  border-radius: 10px;
  border: 3px solid #fff;
}
// ホバー時のスクロールバーのサムの色 
::-webkit-scrollbar-thumb:hover {
  background-color: #444;
}
</style>