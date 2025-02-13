<template>
  <section>
    <div class="guide fade-enter-from" v-observe="'inview'">
      <h2 class="guide-title">時代案内人・若武者隊</h2>
      <div class="guide-content">
        <img src="/img/guide/guideContent1.jpg" alt="guide-content">
        <div class="guide-content-text">
          <h3 class="guide-content-title right">まつえ時代案内人</h3>
          <p class="guide-content-text">
            「天下一やさしいお城ガイド」を合言葉に武者が松江城を攻めと守りの目線から案内します。ただ見るだけでは分からない松江城の魅力を分かりやすく解説！
          </p>
          <a href="https://www.kankou-matsue.jp/machiaruki/course/desc/?id=9" target="_blank" class="guide-content-link">
            <p>詳細はこちら</p>
          </a>
        </div>
      </div>
      <div class="guide-content" style="margin-top: 40px;">
        <img src="/img/guide/guideContent2.jpg" alt="guide-content" class="sp-only">
        <div class="guide-content-text">
          <h3 class="guide-content-title left">まつえ若武者隊</h3>
          <p class="guide-content-text left">
            ４００年の時を越え、現世に蘇った武者たち。松江から日の本を元気にするため、県外のPRステージや城中に出陣し、武者のまち「松江」を紹介！土曜日、日曜日に松江城に行けば、会えるかも…！
          </p>
          <a href="https://ameblo.jp/matsue-wakamusya-tai/" target="_blank" class="guide-content-link left">
            <p>詳細はこちら</p>
          </a>
        </div>
        <img src="/img/guide/guideContent2.jpg" alt="guide-content" class="pc-only">
      </div>
      <img src="/img/guide/spear_new2.png" alt="feature" class="ninja">
      <Highlight />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding-top: 8%;
  scroll-margin-top: 40px;
  @include mixins.max-screen(800px) {
    padding-top: 20%;
  }
}
.guide {
  padding: 4%;
  background-image: url('/img/guide/guideBG.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 800px;
  height: 2070px;
  font-size: 12px;
  line-height: 2;
  margin: 0 auto 0;
  position: relative;
  @include mixins.max-screen(800px) {
    background-image: url('/img/guide/guideBG-sp.jpg');
    width: 90vw;
    height: 705vw;
    padding: 4% 6%;
  }
  .guide-title {
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
    margin-top: -80px;
    @include mixins.max-screen(800px) {
      background-image: url('/img/subtract-sp.png');
      width: 70vw;
      height: 15vw;
      font-size: 5vw;
      line-height: 15vw;
      margin-top: -11.5vw;
    }
  }
  .guide-content {
    display: flex;
    justify-content: center;
    margin-top: 35px;
    @include mixins.max-screen(800px) {
      display: block;
      margin-top: 6%;
    }
    img {
      width: 380px;
      height: 210px;
      border: 2px solid #002D18;
      @include mixins.max-screen(800px) {
        width: 100%;
        height: 45vw;
        object-fit: cover;
        object-position: left 50% bottom 50%;
      }
    }
    .guide-content-text {
      width: 262px;
      @include mixins.max-screen(800px) {
        width: 100%;
        margin-top: 5%;
      }
      .guide-content-title {
        font-size: 20px;
        border: 2px solid #002D18;
        padding-left: 20px;
        margin-top: 4%;
        @include mixins.max-screen(800px) {
          font-size: 4vw;
          margin-left: -4vw;
          width: 60%;
          text-align: center;
          padding-left: 0;
        }
        &.right {
          border-left: none;
        }
        &.left {
          border-right: none;
          @include mixins.max-screen(800px) {
            border-left: none;
            border-right: 2px solid #002D18;
            
          }
        }
      }
      .guide-content-text {
        font-size: 14px;
        line-height: 1.8;
        padding: 0 10px 0 20px;
        margin-top: 2%;
        @include mixins.max-screen(800px) {
          font-size: 3.1vw;
          line-height: 1.8;
          padding: 0 3%;
        }
        &.left {
          padding-left: 0;
          padding-right: 20px;
          @include mixins.max-screen(800px) {
            padding: 0 3%;
          }
        }
      }
      .guide-content-link {
        display: block;
        text-align: center;
        margin: 5% 0 0 5%;
        background-color: #E68224;
        border: 2px solid #000;
        color: #fff;
        font-size: 14px;
        width: 180px;
        height: 34px;
        line-height: 34px;
        border-radius: 80px;
        box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 1);
        transition: color 0.3s, background-color 0.1s, transform 0.1s;
        @include mixins.max-screen(800px) {
          width: 49vw;
          height: 9vw;
          font-size: 3.9vw;
          line-height: 9vw;
          margin: 3% auto;
        }
        &.left {
          margin-left: auto;
          margin-right: 20px;
          @include mixins.max-screen(800px) {
            margin: 3% auto;
          }
        }
        p {
          margin: 0;
          line-height: 34px;
          @include mixins.max-screen(800px) {
            line-height: 9vw;
          }
        }
        @include mixins.min-screen(801px) {
          &:hover {
            background-color: #fff;
            color: #E68224;
            transform: translateY(-3px);
          }
        }
      }
    }
  }
  .ninja {
    width: 71px;
    display: block;
    margin: -60px -20px 0 auto;
    @include mixins.max-screen(800px) {
      width: 15vw;
      margin: -10vw -3vw 0 auto;
    }
  }
}
</style>