<template>
  <section>
    <div class="highlight fade-enter-from" v-observe="'inview'">
      <h2 class="highlight-title">武者のおすすめ６選</h2>
      <div class="highlight-inner">
        <h3 class="highlight-name">
          天守外
        </h3>
        <div class="highlight-content-wrapper">
          <div class="highlight-content">
            <img src="/img/highlight/umadamari.jpg" class="highlight-content-img" alt="umadamari">
            <h4 class="highlight-content-name">馬溜<small>（枡形虎口）</small></h4>
            <p class="highlight-content-text">
              <img src="/img/highlight/umadamariIcon.png" class="highlight-content-icon umadamari" alt="umadamariIcon">
              敵を殲滅するために四方を囲まれた空間。その先に待ち構えるは大手門！
            </p>
          </div>
          <div class="highlight-content">
            <img src="/img/highlight/ishigaki.jpg" class="highlight-content-img" alt="ishigaki">
            <h4 class="highlight-content-name">石垣の刻印</h4>
            <p class="highlight-content-text">
              <img src="/img/highlight/ishigakiIcon.png" class="highlight-content-icon ishigaki" alt="ishigakiIcon">
              石垣には殿（堀尾氏）の家紋である「分銅紋」をはじめとした様々な紋様があるぞ！
            </p>
          </div>
          <div class="highlight-content" style="margin-bottom: 0%;">
            <img src="/img/highlight/tensyu.jpg" class="highlight-content-img" alt="tensyu">
            <h4 class="highlight-content-name">天守の鯱</h4>
            <p class="highlight-content-text">
              <img src="/img/highlight/tensyuIcon.png" class="highlight-content-icon tensyu" alt="tensyuIcon">
              現存１２天守の中で最大の大きさを誇る鯱（しゃちほこ）。
            </p>
          </div>
        </div>
      </div>
      <div class="highlight-inner" style="margin-top: 0%;">
        <h3 class="highlight-name">
          天守内
        </h3>
        <div class="highlight-content-wrapper">
          <div class="highlight-content">
            <img src="/img/highlight/tooshihashira.jpg" class="highlight-content-img" alt="tooshihashira">
            <h4 class="highlight-content-name">通し柱</h4>
            <p class="highlight-content-text">
              <img src="/img/highlight/tooshihashiraIcon.png" class="highlight-content-icon tooshihashira" alt="tooshihashiraIcon">
              １階と２階を貫くように配置され、荷重を分散させる構造となっておるぞ。当時最新の築城技術じゃ！
            </p>
          </div>
          <div class="highlight-content">
            <img src="/img/highlight/tsutsumiita.jpg" class="highlight-content-img" alt="tsutsumiita">
            <h4 class="highlight-content-name">包板の柱</h4>
            <p class="highlight-content-text">
              <img src="/img/highlight/tsutsumiitaIcon.png" class="highlight-content-icon tsutsumiita" alt="tsutsumiitaIcon">
              柱を板状の部材で囲み、鉄輪やかすがいで固定した松江城特有の柱じゃ！
            </p>
          </div>
          <div class="highlight-content">
            <img src="/img/highlight/kitourei.jpg" class="highlight-content-img" alt="kitourei">
            <h4 class="highlight-content-name">祈祷札</h4>
            <p class="highlight-content-text">
              <img src="/img/highlight/kitoureiIcon.png" class="highlight-content-icon kitourei" alt="kitoureiIcon">
              天守内では松江城天守を国宝へと押し上げた貴重な史料「祈祷札（きとうふだ）」のれぷりかが見られるぞ！
            </p>
          </div>
        </div>
      </div>
      <img src="/img/highlight/SNinja_nosword_idle.png" class="ninja" alt="ninja">
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding-top: 0 !important;
  @include mixins.max-screen(800px) {
    padding-top: 5% !important;
  }
}
.highlight {
  padding: 2% 0;
  width: 720px;
  height: 1343px;
  margin: 0px auto 0;
  position: relative;
  @include mixins.max-screen(800px) {
    width: 100%;
    height: 479vw;
  }
  .highlight-title {
    width: 260px;
    height: 40px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    line-height: 40px;
    margin: 0 auto;
    background-color: #006837;
    border: 2px solid #002D18;
    @include mixins.max-screen(800px) {
      width: 70vw;
      height: 11vw;
      font-size: 5.2vw;
      line-height: 11vw;
    }
  }
  .highlight-inner {
    margin-top: 3%;
    @include mixins.max-screen(800px) {
      margin-top: 7%;
    }
    .highlight-name {
      background-image: url('/img/highlight/highlightFlame1.jpg');
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
      width: 104px;
      height: 36px;
      text-align: center;
      color: #002D18;
      font-size: 22px;
      line-height: 36px;
      margin: 0 auto;
      @include mixins.max-screen(800px) {
        width: 24.5vw;
        height: 9vw;
        font-size: 5.3vw;
        line-height: 9vw;
      }
    }
    .highlight-content-wrapper {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 5%;
      margin: 3% 0 0 0;
      .highlight-content {
        position: relative;
        margin: 0 0 2% 0;
        height: 300px;
        @include mixins.max-screen(800px) {
          height: auto;
          margin: 5% 0 2% 0;
        }
        .highlight-content-img {
          border: 2px solid #002D18;
          width: 340px;
          @include mixins.max-screen(800px) {
            width: 80vw;
            height: 45vw;
            object-fit: cover;
            object-position: center;
            margin: 0 auto;
            display: block;
          }
        }
        .highlight-content-name {
          position: absolute;
          top: 5%;
          left: 2px;
          background-image: url('/img/highlight/highlightFlame2.jpg');
          background-size: 100% 100%;
          background-position: center;
          background-repeat: no-repeat;
          width: 110px;
          height: 32px;
          font-size: 14px;
          text-align: center;
          line-height: 32px;
          small {
            font-size: 10px;
          }
          @include mixins.max-screen(800px) {
            width: 30vw;
            height: 8vw;
            line-height: 8vw;
            top: 5%;
            left: 0;
            margin-left: 0.4vw;
            font-size: 3.6vw;
            small {
              font-size: 2.4vw;
            }
          }
        }
        .highlight-content-text {
          position: relative;
          width: 340px;
          padding: 2% 0 0 20%;
          font-size: 14px;
          line-height: 1.5;
          img {
            position: absolute;
            right: 80%;
            @include mixins.max-screen(800px) {
              left: 73%;
            }
            &.umadamari {
              top: -140%;
              @include mixins.max-screen(800px) {
                top: -25%;
                width: 20vw;
              }
            }
            &.ishigaki {
              top: -60%;
              @include mixins.max-screen(800px) {
                top: -50%;
                left: 78%;
                width: 18vw;
              }
            }
            &.tensyu {
              top: -100%;
              @include mixins.max-screen(800px) {
                top: -85%;
                right: 82%;
                width: 18vw;
              }
            }
            &.tooshihashira {
              top: -100%;
              @include mixins.max-screen(800px) {
                top: -45%;
                right: 75%;
                width: 25vw;
              }
            }
            &.tsutsumiita {
              top: -100%;
              @include mixins.max-screen(800px) {
                top: -45%;
                right: 77%;
                width: 23vw;
              }
            }
            &.kitourei {
              top: -60%;
              @include mixins.max-screen(800px) {
                top: -25%;
                right: 77%;
                width: 26vw;
              }
            }
          }
          @include mixins.max-screen(800px) {
            width: 100%;
            font-size: 3.3vw;
            padding: 2% 19vw 0 1vw;
          }
        }
      }
      @include mixins.max-screen(800px) {
        margin: 3% 0 5% 0;
      }
    }

  }
  .ninja {
    position: absolute;
    bottom: -115px;
    left: -90px;
    width: 220px;
    @include mixins.max-screen(800px) {
      width: 40vw;
      bottom: 3%;
      left: -15%;
    }
  }
}
</style>