<template>
  <section style="padding-top: 8%;"> 
    <div class="guide fade-enter-from" v-observe="'inview'">
      <h2 class="guide-title">時代案内人・若武者隊</h2>
      <div class="guide-content">
        <img src="/img/guide/guideContent1.jpg" alt="guide-content">
        <div class="guide-content-text">
          <h3 class="guide-content-title right">まつえ時代案内人</h3>
          <p class="guide-content-text">
            「天下一やさしいお城ガイド」を合言葉に武者が松江城を攻めと守りの目線から案内します。ただ見るだけでは分からない松江城の魅力を分かりやすく解説！
          </p>
          <a href="https://matsue-musya.com/344" target="_blank" class="guide-content-link">
            <p>詳細はこちら</p>
          </a>
        </div>
      </div>
      <div class="guide-content" style="margin-top: 25px;">
        <div class="guide-content-text">
          <h3 class="guide-content-title left">まつえ若武者隊</h3>
          <p class="guide-content-text left">
            四〇〇年の時を越え、平成の世に甦った武者たち。松江から日の本を元気にするため、県外のPRステージや城中に出陣し、武者のまち「松江」を紹介！土曜日、日曜日に松江城に行けば、会えるかも…！
          </p>
          <a href="https://matsue-musya.com/category/profile" target="_blank" class="guide-content-link left">
            <p>詳細はこちら</p>
          </a>
        </div>
        <img src="/img/guide/guideContent2.jpg" alt="guide-content">
      </div>
      <img src="/img/guide/spear_new2.png" alt="feature" class="ninja">
    </div>
  </section>
</template>

<style lang="scss" scoped>
.guide {
  padding: 4%;
  background-image: url('/img/guide/guideBG.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 800px;
  height: 573px;
  font-size: 12px;
  line-height: 2;
  margin: 0 auto 0;
  position: relative;
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
  }
  .guide-content {
    display: flex;
    justify-content: center;
    margin-top: 35px;
    img {
      width: 381px;
      border: 2px solid #002D18;
    }
    .guide-content-text {
      width: 262px;
      .guide-content-title {
        font-size: 20px;
        border: 2px solid #002D18;
        padding-left: 20px;
        margin-top: 8%;
        &.right {
          border-left: none;
        }
        &.left {
          border-right: none;
        }
      }
      .guide-content-text {
        font-size: 10px;
        line-height: 2;
        padding: 0 10px 0 20px;
        margin-top: 5%;
        &.left {
          padding-left: 0;
          padding-right: 20px;
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
        &.left {
          margin-left: auto;
          margin-right: 20px;
        }
        p {
          margin: 0;
          line-height: 34px;
        }
        &:hover {
          background-color: #fff;
          color: #E68224;
          transform: translateY(-3px);
        }
      }
    }
  }
  .ninja {
    width: 71px;
    position: absolute;
    bottom: 6px;
    right: 4.5%;
  }
}
</style>